import google.generativeai as genai
from dotenv import load_dotenv
import os;

load_dotenv()
Api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=Api_key)  # type: ignore

def find_hospitals(location: str, disease: str) -> str:
    
    model = genai.GenerativeModel("gemini-2.5-flash-preview-05-20")  # type: ignore
    prompt = (
        "You are a helpful hospital information assistant. "
        "Based on the provided location and disease, find a list of hospitals with their public details. "
        "Do not provide medical advice. "
        "Include the hospital name, address, phone number, and any other publicly available information. "
        "Format the response as a clear, readable list.\n\n"
        f"Location: {location}\n"
        f"Disease: {disease}"
    )

    try:
        response = model.generate_content(prompt)
        if response and response.text:
            return response.text.strip()
        else:
            return "Sorry, I couldn't generate a response. Please try again."
    except Exception as e:
        return f"An error occurred: {e}"
