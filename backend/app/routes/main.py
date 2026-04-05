from flask import Blueprint, jsonify, request

main_bp = Blueprint("main", __name__)


@main_bp.get("/health")
def health():
    return jsonify({"status": "ok", "service": "ProTech API"})


@main_bp.post("/contact")
def contact():
    data = request.get_json(silent=True) or {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    if not all([name, email, subject, message]):
        return jsonify({"error": "All fields are required"}), 400

    if "@" not in email or "." not in email:
        return jsonify({"error": "Invalid email address"}), 400

    # Log the contact request (replace with email sending / DB save as needed)
    print(
        f"[CONTACT] From: {name} <{email}> | Subject: {subject}\n{message}"
    )

    return jsonify({"success": True, "message": "Message received"}), 200
