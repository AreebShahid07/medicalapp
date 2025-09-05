import onnxruntime as ort
import numpy as np
from PIL import Image, UnidentifiedImageError

try:
    session = ort.InferenceSession("models/eye_model.onnx")
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
except Exception as e:
    raise RuntimeError(f"Failed to load eye model: {e}")

classes = [
    "Bietti Crystalline Dystrophy",
    "Blur Fundus With Suspected Diabetic Retinopathy",
    "Blur Fundus Without Diabetic Retinopathy",
    "Branch Retinal Vein Occlusion (BRVO)",
    "Central Retinal Vein Occlusion (CRVO)",
    "Central Serous Chorioretinopathy (CSCR)",
    "Chorioretinal Atrophy-Coloboma",
    "Congenital Disc Abnormality",
    "Cotton-Wool Spots",
    "Diabetic Retinopathy1 (DR1)",
    "Diabetic Retinopathy2 (DR2)",
    "Diabetic Retinopathy3 (DR3)",
    "Disc Swelling And Elevation",
    "Dragged Disc",
    "Epiretinal Membrane (ERM)",
    "Fibrosis",
    "Fundus Neoplasm",
    "Large Optic Cup",
    "Laser Spots",
    "Macular Hole (MH)",
    "Maculopathy",
    "Massive Hard Exudates",
    "Myelinated Nerve Fiber",
    "Normal",
    "Optic Atrophy",
    "Pathological Myopia",
    "Peripheral Retinal Degeneration And Break",
    "Possible Glaucoma",
    "Preretinal Hemorrhage (PRH)",
    "Retinal Artery Occlusion (RAO)",
    "Retinitis Pigmentosa (RP)",
    "Rhegmatogenous RD",
    "Severe Hypertensive Retinopathy",
    "Silicon Oil In Eye",
    "Tessellated Fundus",
    "Vessel Tortuosity",
    "Vogt-Koyanagi-Harada Disease (VKH)",
    "Vitreous Particles",
    "Yellow-White Spots-Flecks",
]

def predict_eye(image):
    try:
        if not isinstance(image, Image.Image):
            raise TypeError("Input must be a PIL.Image object")

        img = image.convert("RGB").resize((224, 224))
        x = np.expand_dims(np.array(img), 0).astype(np.float32)

        pred = session.run([output_name], {input_name: x})[0]
        idx = int(np.argmax(pred)) # type: ignore

        return {"prediction": classes[idx], "confidence": float(np.max(pred))} # type: ignore

    except UnidentifiedImageError:
        return {"error": "Invalid image format. Please upload a valid image file."}
    except TypeError as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": f"Eye model inference failed: {str(e)}"}
