import google.generativeai as genai
from dotenv import load_dotenv
import os;

load_dotenv()
Api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=Api_key)  # type: ignore

def ask_gemini_medical(question: str) -> str:
    
    model = genai.GenerativeModel("gemini-2.5-flash-preview-05-20")  # type: ignore
    prompt = (
        "You are a helpful medical assistant. "
        "Answer the following question with clear, concise, and accurate medical information. "
        "Must try to answer anything valuable instead of refusing. "
        "Format the response as a clear, readable list."
        "Respond in a direct and helpful manner.\n\n"
        f"Question: {question}"
    )

    try:
        response = model.generate_content(prompt)
        if response and response.text:
            return response.text.strip()
        else:
            return "Sorry, I couldn't generate a response. Please try again."
    except Exception as e:
        return f"An error occurred: {e}"
