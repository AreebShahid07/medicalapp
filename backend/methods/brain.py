import onnxruntime as ort
import numpy as np
from PIL import Image, UnidentifiedImageError

try:
    session = ort.InferenceSession("models/brain_model.onnx")
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
except Exception as e:
    raise RuntimeError(f"Failed to load brain model: {e}")

classes = {0: "Glioma", 1: "Meningioma", 2: "No Tumor", 3: "Pituitary"}

def predict_brain(image):
    try:
       
        if not isinstance(image, Image.Image):
            raise TypeError("Input must be a PIL.Image object")

        img = image.convert("L").resize((168, 168))
        x = np.expand_dims(np.expand_dims(np.array(img) / 255.0, -1), 0).astype(np.float32)

        pred = session.run([output_name], {input_name: x})[0]
       
        idx = int(np.argmax(pred))  # type: ignore
        return {"prediction": classes[idx], "confidence": float(np.max(pred))} # type: ignore

    except UnidentifiedImageError:
        return {"error": "Invalid image format. Please upload a valid image file."}
    except TypeError as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": f"Brain model inference failed: {str(e)}"}
