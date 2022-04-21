import React, { useEffect, useState } from 'react';
import axios from 'axios'

const BASE_URL_EXTRACT = process.env.REACT_APP_API_V1

const Dashboard = () => {
    const [quote, setQuote] = useState(null)
    const [update, setUpdate] = useState(false)
    const [like, setLike] = useState(0)
    const [unLike, setUnLike] = useState(0)


  // useeffect for upload image handle
  useEffect(() => {
    if (quote === null || update === true){ 
        axios.create({
                baseURL: BASE_URL_EXTRACT,
            }
        ).get("quotes/random", {
            headers: {
              "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.status === 200) {
                setQuote(response.data.en)
                setLike(response.data.like)
                setUnLike(response.data.unlike)
                setUpdate(false)
            }
        }).catch(function (error) {
            console.log("[API] upload image failed with:", error)
        });
    } 
  }, [quote, update]);

  function getTimeString(){
    const formatYmd = date => date.toISOString().slice(0, 10);
    let data = formatYmd(new Date())
    return data
  }
  
  const handleLike = () => {

    let formData = new FormData();
        formData.append("type", "like");
        let data = getTimeString()
        console.log(data)
        formData.append("str_date", getTimeString());
       axios.create(
        {
            baseURL: BASE_URL_EXTRACT,
        }
    ).post("quotes/add/", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => {
        if (response.status === 200) {
            setUpdate(true)
        }
    }).catch(function (error) {
        console.log("[API] upload image failed with:", error)
    }
    )
  }
  const handleUnLike = () => {
    let formData = new FormData();
    formData.append("type", "unlike");
    formData.append("str_date", getTimeString());
    axios.create(
        {
            baseURL: BASE_URL_EXTRACT,
        }
    ).post("quotes/add/", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"

        }
    }).then(response => {
        if (response.status === 200) {
            setUpdate(true)
        }
    }).catch(function (error) {
        console.log("[API] upload image failed with:", error)
    }
    )
  }

    return (
    <div style={{margin: "0 auto", textAlign: "center"}}>
        <p>Qoute: {quote}</p>
        <p>Like: {like}</p>
        <p>UnLike: {unLike}</p>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnLike}>UnLike</button>
    </div>
    )
}

export default Dashboard;
