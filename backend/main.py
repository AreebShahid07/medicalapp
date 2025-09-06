from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from io import BytesIO
from PIL import Image, UnidentifiedImageError

from methods.brain import predict_brain
from methods.chest import predict_chest
from methods.eye import predict_eye
from methods.skin import predict_skin
from methods.chatbot import ask_gemini_medical  
from methods.hospital import find_hospitals

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MedicalQuestion(BaseModel):
    text: str

class HospitalSearch(BaseModel):
    location: str
    disease: str

# ---------- Utils ----------
async def read_image(file: UploadFile) -> Image.Image:
    try:
        contents = await file.read()
        return Image.open(BytesIO(contents))
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Invalid image file.")

# ---------- Routes ----------
@app.get("/")
def root():
    return {"message": "Hello, World!"}

@app.post("/detect-brain/")
async def detect_brain(file: UploadFile = File(...)):
    img = await read_image(file)
    return predict_brain(img)

@app.post("/detect-chest/")
async def detect_chest(file: UploadFile = File(...)):
    img = await read_image(file)
    return predict_chest(img)

@app.post("/detect-skin/")
async def detect_skin(file: UploadFile = File(...)):
    img = await read_image(file)
    return predict_skin(img)

@app.post("/detect-eye/")
async def detect_eye(file: UploadFile = File(...)):
    img = await read_image(file)
    return predict_eye(img)

@app.post("/ask-medical")
def ask_medical(question: MedicalQuestion):
    return {"answer": ask_gemini_medical(question.text)}

@app.post("/ask-hospital")
def search_hospitals(search_data: HospitalSearch):
    result = find_hospitals(search_data.location, search_data.disease)
    return {"answer": result}
# Run with:
# uvicorn main:app --port 8000 --reload
