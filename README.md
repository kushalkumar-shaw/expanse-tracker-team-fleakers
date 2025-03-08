# 📌 Expense Tracker App  

A **React-based** expense tracker that helps users **log, filter, visualize, and export expenses**, with a **budget-setting feature and alerts** when overspending. Built with **React & Tailwind CSS**.  

---

## 🔧 Features  

✔️ **Add, Edit & Delete Expenses** - Track daily spending.  
✔️ **Filter & Sort Expenses** - Filter by category & date.  
✔️ **Visual Charts** - Bar charts for monthly spending trends.  
✔️ **Set Monthly Budget** - Get alerts when exceeding the budget.  
✔️ **Export to CSV** - Download expense data in CSV format.  
✔️ **Local Storage Support** - Saves data automatically.  

---

## 📂 Folder Structure  

```
📦 expense-tracker  
 ┣ 📂 src  
 ┃ ┣ 📂 img    
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ 📜 Navbar.jsx (Navigation bar)  
 ┃ ┃ ┣ 📜 ExpenseTracker.jsx (Main logic)  
 ┃ ┃ ┣ 📜 ExpenseForm.jsx (Form for adding expenses)  
 ┃ ┃ ┣ 📜 ExpenseList.jsx (Displays expenses)  
 ┃ ┃ ┣ 📜 ExpenseFilters.jsx (Filter expenses by date/category)  
 ┃ ┃ ┣ 📜 ExpenseChart.jsx (Pie chart for spending by category)  
 ┃ ┃ ┣ 📜 MonthlyExpenseChart.jsx (Bar chart for monthly expenses)  
 ┃ ┃ ┣ 📜 BudgetSetter.jsx (Set budget & alerts)  
 ┃ ┃ ┣ 📜 ExportCSV.jsx (Export data to CSV)  
 ┃ ┣ 📜 App.js (Main component)  
 ┃ ┣ 📜 index.js (Entry point)  
 ┣ 📜 public  
 ┃ ┗ 📜 logo.png (Logo image)  
 ┣ 📜 package.json  
 ┣ 📜 tailwind.config.js  
 ┗ 📜 README.md  
```

---

## 🚀 Installation & Setup  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Run the App**  
```bash
npm start
```

4️⃣ **Build for Production**  
```bash
npm run build
```

---

## 🛠️ Tech Stack  

| Technology | Purpose |
|------------|---------|
| **React** | Frontend UI framework |
| **Tailwind CSS** | Styling |
| **LocalStorage** | Data persistence |
| **Chart.js** | Expense visualizations |
| **FileSaver.js** | CSV export functionality |

---

## 📜 Code Overview  

### 1️⃣ `ExpenseTracker.jsx`  
Handles **state management**, **filters**, and **alerts** when the budget is exceeded.  
```jsx
const totalSpent = expenses.reduce((acc, exp) => acc + exp.amount, 0);
if (budget > 0 && totalSpent > budget) {
  alert("⚠️ Warning: You have exceeded your budget!");
}
```

### 2️⃣ `BudgetSetter.jsx`  
Allows users to set their **monthly budget**.  
```jsx
const handleSetBudget = () => {
  localStorage.setItem("budget", newBudget);
  alert("Budget set successfully! ✅");
};
```

### 3️⃣ `ExportCSV.jsx`  
Exports expenses as a **CSV file** with a timestamp.  
```jsx
const currentDate = new Date().toISOString().split("T")[0];
const fileName = `expenses_${currentDate}.csv`;
```

---

## 📌 Future Improvements  
🚀 **Deploy Online (Vercel/Netlify)**  
📱 **Improve Mobile UI**  
📊 **More Chart Types (Line Graphs, Trends)**  
🔔 **Advanced Notifications**  

---

## 📜 License  
This project is **open-source** under the **MIT License**.  
