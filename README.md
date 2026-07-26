# 🌟 Street Light Fault Register and Repair Tracker

## 📌 Problem Statement
Street light failures are reported manually to municipal offices, often without proper location details. There is no clear tracking of when a fault was reported or whether it has been fixed. This leads to repeated complaints and poor monitoring.

---

## 🎯 Objective
To build a system that:
- Records each street light fault with location and date  
- Tracks faults until they are repaired  
- Helps identify long-pending issues  
- Identifies frequently failing areas  

---

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript
- JSON (data storage)

---

## 📂 Project Structure
```
├── index.html
├── style.css
├── script.js
├── data.json
```

---

## 🚀 How to Run

1. Download the project folder  
2. Open in VS Code  
3. Keep all files in same folder  
4. Open `index.html` in browser  

👉 Recommended:
Use **Live Server** for proper JSON loading

---

## 📊 Dataset Description

The dataset contains street light fault records with fields:

| Field | Meaning |
|------|--------|
| fault_id | Unique ID |
| street | Street name |
| ward | Ward/location |
| status | Pending / Fixed |

### ⚠ Special Cases Included
- Missing ward values  
- Similar street names (Anna Nagar / Anna Nagar East)  
- Incomplete records  

---

## 🖥 Task 1: Prepare Sample Data
- Created dataset with multiple fault records  
- Included edge cases for testing  
- Ensured realistic data  

---

## 🖥 Task 2: Main Screen
- Displayed list of faults in table  
- Implemented:
  - 🔍 Search (live typing)
  - 🎛 Filter (Pending / Fixed)
- Displayed total count of records  

---

## 🖥 Task 3: Detail / Summary
- Displays record details in table  
- Shows total count of filtered data  
- Helps user quickly analyze data  

---

## 🖥 Task 4: Screen States & Mobile View
Handled all states:
- Loading data  
- No results found  
- Missing values (shown as "N/A")  
- Error handling (data load failure)

Mobile support:
- Responsive layout  
- No horizontal scrolling  
- Easy tap controls  

---

## 🖥 Task 5: Integration & Testing
- Connected HTML, CSS, JS, and JSON  
- Verified search & filter functionality  
- Checked data display manually  
- Ensured no blank screens  

---

## 🖥 Task 6: Documentation & Demo
- Created README file  
- Added screenshots (to be uploaded)  
- Demo video recorded (to be uploaded)  
- Uploaded to public GitHub repository  

---

## ⚙️ Features

- 🔍 Live search by street  
- 🎛 Filter by status  
- 📊 Dynamic record count  
- ⚠ Missing data handling  
- 📱 Mobile-friendly UI  

---

## ❗ Limitations
- Static data (no database)  
- No user login  
- No real-time updates  

---

## 🚀 Future Improvements
- Add backend (Node.js / Python)  
- Use database (MySQL / MongoDB)  
- Add complaint registration form  
- Track repair dates  

---

## 👩‍💻 Author
**S. Thanvarsha**  
B.Tech AI & DS  
Batch 4  

---

## ✅ Conclusion
This project provides a simple and effective solution to track street light faults digitally, improving efficiency and reducing manual errors.# Street_Light_Fault_Management_System
