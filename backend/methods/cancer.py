import onnxruntime as ort
import numpy as np
from PIL import Image, UnidentifiedImageError

try:
    session = ort.InferenceSession("models/cancer_model.onnx")
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
except Exception as e:
    raise RuntimeError(f"Failed to load cancer model: {e}")


classes = {
    0: "colon_aca",   # colon adenocarcinoma
    1: "colon_bnt",   # colon benign tissue
    2: "lung_aca",    # lung adenocarcinoma
    3: "lung_bnt",    # lung benign tissue
    4: "lung_scc"     # lung squamous cell carcinoma
}

def predict_cancer(image):
    try:
        
        if not isinstance(image, Image.Image):
            raise TypeError("Input must be a PIL.Image object")

        
        img = image.convert("RGB").resize((224, 224))
        x = np.expand_dims(np.array(img) / 255.0, 0).astype(np.float32)

        
        pred = session.run([output_name], {input_name: x})[0]
        idx = int(np.argmax(pred))  # type: ignore

        return {
            "prediction": classes[idx],
            "confidence": float(np.max(pred)),  # type: ignore
        }

    except UnidentifiedImageError:
        return {"error": "Invalid image format. Please upload a valid image file."}
    except TypeError as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": f"Cancer model inference failed: {str(e)}"}
