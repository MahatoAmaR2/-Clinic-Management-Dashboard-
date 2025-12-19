# 🏥 Clinic Management Backend System

A backend system for managing doctors, patients, appointments, and authentication with secure role-based access.

---

## 🚀 Features
- JWT Authentication & Authorization
- Role-based access (Admin, Staff, Doctor)
- Doctor, Patient & Appointment Management
- Prevents double-booking of appointments
- Secure password hashing using bcrypt
- RESTful APIs

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT
- bcrypt

---

## 📘 API Documentation

### 🔐 Authentication

| Method | URL | Access |
|------|-----|--------|
| POST | `/api/auth/signup` | Public |
| POST | `/api/auth/login` | Public |
| POST | `/api/auth/logout` | Authenticated |
| PUT  | `/api/auth/update-password` | Authenticated |
| PUT  | `/api/auth/:id/role `| Admin |

---

### 👨‍⚕️ Doctor APIs

| Method | URL | Access |
|------|-----|--------|
| POST | `/api/doctors` | Admin |
| GET  | `/api/doctors` | Authenticated |
| GET  | `/api/doctors/:id` | Authenticated |
| PUT  | `/api/doctors/:id` | Admin |
| DELETE  | `/api/doctors/:id` | Admin |

---

### 🧑‍⚕️ Patient APIs

| Method | URL | Access |
|------|-----|--------|
| POST | `/api/patients` | Admin, Staff |
| GET  | `/api/patients` | Admin, Staff, Doctor |
| GET  | `/api/patients/:id` | Admin, Staff, Doctor |
| PUT  | `/api/patients/:id` | Admin, Staff |
| DELETE | `/api/patients/:id` | Admin |

---

### 📅 Appointment APIs

| Method | URL | Access |
|------|-----|--------|
| POST | `/api/appointments` | Admin, Staff |
| GET  | `/api/appointments` | Admin, Staff, Doctor |
| PUT  | `/api/appointments/:id/status` | Admin, Doctor |
| DELETE | `/api/appointments/:id` | Admin, Staff |


## 🗄️ Database Schema

### 👤 User
- name: String — user full name
- email: String — unique email address
- password: String — hashed password
- role: String — `admin`, `staff`, `doctor`
- createdAt: Date — auto-generated
- updatedAt: Date — auto-generated

---

### 👨‍⚕️ Doctor
- name: String — doctor name
- email: String — doctor email
- specialty: String — doctor specialization
- experience: Number — years of experience
- phone: String — contact number
- availability: String — available days
- status: String — `active`, `inactive`
- createdAt: Date — auto-generated
- updatedAt: Date — auto-generated

---

### 🧑‍⚕️ Patient
- name: String — patient name
- age: Number — patient age
- gender: String — `male`, `female`, `other`
- phone: String — contact number
- problem: String — medical issue
- assignedDoctor: ObjectId — reference to Doctor
- status: String — `active`, `discharged`
- createdAt: Date — auto-generated
- updatedAt: Date — auto-generated

---

### 📅 Appointment
- patient: ObjectId — reference to Patient
- doctor: ObjectId — reference to Doctor
- date: String — appointment date (YYYY-MM-DD)
- time: String — appointment time (HH:MM)
- status: String — `scheduled`, `completed`, `cancelled`
- notes: String — optional notes
- createdAt: Date — auto-generated
- updatedAt: Date — auto-generated
