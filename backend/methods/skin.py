import onnxruntime as ort
import numpy as np
from PIL import Image, UnidentifiedImageError

try:
    session = ort.InferenceSession("models/skin_model.onnx")
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
except Exception as e:
    raise RuntimeError(f"Failed to load skin model: {e}")

classes = sorted([
    "Acne and Rosacea Photos",
    "Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions",
    "Atopic Dermatitis Photos",
    "Bullous Disease Photos",
    "Cellulitis Impetigo and other Bacterial Infections",
    "Eczema Photos",
    "Exanthems and Drug Eruptions",
    "Hair Loss Photos Alopecia and other Hair Diseases",
    "Herpes HPV and other STDs Photos",
    "Light Diseases and Disorders of Pigmentation",
    "Lupus and other Connective Tissue diseases",
    "Melanoma Skin Cancer Nevi and Moles",
    "Nail Fungus and other Nail Disease",
    "Poison Ivy Photos and other Contact Dermatitis",
    "Psoriasis pictures Lichen Planus and related diseases",
    "Scabies Lyme Disease and other Infestations and Bites",
    "Seborrheic Keratoses and other Benign Tumors",
    "Systemic Disease",
    "Tinea Ringworm Candidiasis and other Fungal Infections",
    "Urticaria Hives",
    "Vascular Tumors",
    "Vasculitis",
    "Warts Molluscum and other Viral Infections",
])

def predict_skin(image):
    try:
        if not isinstance(image, Image.Image):
            raise TypeError("Input must be a PIL.Image object")

        img = image.convert("RGB").resize((224, 224))
        x = np.expand_dims(np.array(img) / 255.0, 0).astype(np.float32).transpose(0, 3, 1, 2)

        pred = session.run([output_name], {input_name: x})[0]
        idx = int(np.argmax(pred)) # type: ignore

        return {"prediction": classes[idx], "confidence": float(np.max(pred))} # type: ignore

    except UnidentifiedImageError:
        return {"error": "Invalid image format. Please upload a valid image file."}
    except TypeError as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": f"Skin model inference failed: {str(e)}"}
