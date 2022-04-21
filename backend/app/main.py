import uvicorn
from fastapi import FastAPI, Form
import requests
import time_helper
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="quotes", openapi_url="/api/openapi.json", docs_url="/api/docs")


origins = [
    "http://localhost:3000",
    "http://localhost:8081",
    "https://morning-sands-55388.herokuapp.com",
    "https://obscure-brushlands-64336.herokuapp.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dicts = {}

@app.post("/api/v1/quotes/add/")
def add(*, type: str = Form("like"), str_date: str = Form(...)):
    if type in ['like', 'unlike']:
        dicts[str_date][type] += 1
        
        
# @app.get("/api/v1/now-utc")
# def get():
#     return time_helper.str_yyyy_mm_dd(time_helper.now_utc())


@app.get("/api/v1/quotes/random")
def hello():
    date = time_helper.now_utc()
    str_date  = time_helper.str_yyyy_mm_dd(date)
    print(str_date)
    try:
        print(dicts[str_date])
    except:
        qoute = requests.get("https://programming-quotes-api.herokuapp.com/quotes/random")
        dicts[str_date] = {"like": 0, "unlike": 0, "en": qoute.json()['en']}
    return dicts[str_date]