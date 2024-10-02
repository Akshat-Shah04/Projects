from tkinter import *
from tkinter import messagebox
import pymysql
from openpyxl import Workbook
import datetime

now = datetime.datetime.now()

formatted_date_time = now.strftime("%d-%m-%Y_%H-%M")

mydb = pymysql.connect(host="localhost", user="root", password="", database="Akshat")
mycursor = mydb.cursor()

# insert data function
def insert_data():
    id = id_entry.get()
    name = name_entry.get()
    email = email_entry.get()
    pwd = pwd_entry.get()

    if not id:
        log_message("Error: ID is required.")
        return
    if not name:
        log_message("Error: Name is required.")
        return
    if not email:
        log_message("Error: EmailID is required.")
        return
    if not pwd:
        log_message("Error: Password is required.")
        return

    sql = "INSERT INTO User (ID, Name, EmailID, Password) VALUES (%s, %s, %s, %s)"
    values = (id, name, email, pwd)

    try:
        mycursor.execute(sql, values)
        mydb.commit()
        log_message("User inserted successfully.")
        id_entry.delete(0, END)
        name_entry.delete(0, END)
        email_entry.delete(0, END)
        pwd_entry.delete(0, END)

    except Exception as e:
        mydb.rollback()
        log_message(f"Error: {e}")


# update data function
def update_data():
    id = id_entry.get()
    name = name_entry.get()
    email = email_entry.get()
    pwd = pwd_entry.get()
    values = []
    updates = []

    if not id:
        log_message("Error: No ID provided. Cannot update user record.")
        return
    if name:
        values.append(name)
        updates.append("Name = %s")
    if email:
        values.append(email)
        updates.append("EmailID = %s")
    if pwd:
        values.append(pwd)
        updates.append("Password = %s")

    if not updates:
        log_message("No Fields to Update...")
        return
    values.append(id)

    update_str = ", ".join(updates)
    sql = f"UPDATE User SET {update_str} WHERE ID = %s"

    try:
        mycursor.execute(sql, values)
        mydb.commit()
        log_message("User Info Updated Successfully...")
        id_entry.delete(0, END)
        name_entry.delete(0, END)
        email_entry.delete(0, END)
        pwd_entry.delete(0, END)

    except Exception as e:
        mydb.rollback()
        log_message(f"Error: {e}")


# delete data records function
def delete_data():
    id = id_entry.get()
    if not id:
        log_message("Error: ID not provided, cannot delete user record...")
        return
    sql = "DELETE FROM User WHERE ID = %s"

    try:
        mycursor.execute(sql, (id,))
        mydb.commit()
        id_entry.delete(0, END)
        log_message("Data deleted successfully.")
    except Exception as e:
        mydb.rollback()
        log_message(f"Error: {e}")


# Show Table data (shows all the records)
def show_data():
    try:
        mycursor.execute("SELECT * FROM User")
        rows = mycursor.fetchall()
        log_message("\n")
        display_text = "ID | Name | EmailID | Password\n"

        for row in rows:
            display_text += f"{row[0]} | {row[1]} | {row[2]} | {row[3]}\n"

        console.delete(1.0, END)

        console.insert(END, display_text)

    except Exception as e:
        log_message(f"Error: {e}")


# Search Data based on ID or name...
def search_data():
    id = id_entry.get()
    name = name_entry.get()
    updates = []
    values = []

    if id:
        updates.append("ID = %s")
        values.append(id)
    if name:
        updates.append("Name = %s")
        values.append(name)

    if not updates:
        log_message("No Input Provided. Please try again.")
        return

    updates_str = " AND ".join(updates)
    sql = f"SELECT * FROM User WHERE {updates_str}"

    try:
        mycursor.execute(sql, values)
        results = mycursor.fetchall()
        log_message(f"Results: {results}")
        id_entry.delete(0, END)
        name_entry.delete(0, END)

    except Exception as e:
        mydb.rollback()
        log_message(f"Error: {e}")


    

def export_excel():
    try:
        mycursor.execute("SELECT * FROM User")
        rows = mycursor.fetchall()
        filepath = f"C:\\Users\\pathi\\Desktop\\excel\\user_{name_entry.get()}_{formatted_date_time}.xlsx"
        workbook = Workbook()
        sheet = workbook.active
        sheet.title = "User Data"
        sheet.append(["ID", "Name", "Email-ID", "Password"])
        for row in rows:
            sheet.append(row)
        workbook.save(filepath)
        messagebox.showinfo(
            title="Info", message=f"Export Completed. File saved at {filepath}."
        )
    except Exception as e:
        messagebox.showerror(title="Error", message=f"Failed to export data: {str(e)}")


# Extra Functions
def log_message(message):
    console.insert(END, f"{message}\n")
    console.yview(END)


def validate_id(inp_val):
    return inp_val.isdigit() or inp_val == ""


root = Tk()
root.title("User Management System 2.1")
root.geometry("500x500")

validate_id_cmd = root.register(validate_id)

# Label -> id,name,email,password
# Entry -> id,name,email,password
Label(root, text="Enter User ID : ").grid(row=0, column=0, padx=10, pady=10)
id_entry = Entry(root, validate="key", validatecommand=(validate_id_cmd, "%P"))
id_entry.grid(row=0, column=1, padx=10, pady=10)

Label(root, text="Enter Name : ").grid(row=1, column=0, padx=10, pady=10)
name_entry = Entry(root)
name_entry.grid(row=1, column=1, padx=10, pady=10)

Label(root, text="Enter Email : ").grid(row=2, column=0, padx=10, pady=10)
email_entry = Entry(root)
email_entry.grid(row=2, column=1, padx=10, pady=10)

Label(root, text="Enter Password : ").grid(row=3, column=0, padx=10, pady=10)
pwd_entry = Entry(root, show="*")
pwd_entry.grid(row=3, column=1, padx=10, pady=10)

# Button -> insert,update,delete,show (records of table(User))
insert_btn = Button(
    root,
    text="Insert",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="green",
    fg="white",
    command=insert_data,
)
insert_btn.grid(row=4, column=0, padx=10, pady=10)

update_btn = Button(
    root,
    text="Update",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="navy",
    fg="white",
    command=update_data,
)
update_btn.grid(row=4, column=1, padx=10, pady=10)

delete_btn = Button(
    root,
    text="Delete",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="red",
    fg="white",
    command=delete_data,
)
delete_btn.grid(row=4, column=2, padx=10, pady=10)

show_btn = Button(
    root,
    text="Show",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="yellow",
    fg="black",
    # command=lambda: log_message("Show clicked"),
    command=show_data,
)
show_btn.grid(row=4, column=3, padx=10, pady=10)

search_btn = Button(
    root,
    text="Search Data",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="crimson",
    fg="white",
    command=search_data,
)
search_btn.grid(row=5, column=0, padx=10, pady=10)


export_excel_btn = Button(
    root,
    text="Export to Excel",
    font=("Times New Roman", 12),
    padx=20,
    pady=5,
    bg="skyblue",
    fg="white",
    command=export_excel,
)
export_excel_btn.grid(row=5, column=2, padx=10, pady=10)


# configure the console screen to show output

console = Text(
    root,
    height=10,
    width=70,
    wrap=WORD,
    borderwidth=2,
    fg="white",
    bg="grey",
    relief=SUNKEN,
)
console.grid(row=6, column=0, columnspan=4, padx=10, pady=10, sticky="nsew")

root.grid_rowconfigure(6, weight=1)
root.grid_columnconfigure(0, weight=1)
root.grid_columnconfigure(1, weight=1)
root.grid_columnconfigure(2, weight=1)
root.grid_columnconfigure(3, weight=1)

# Run the tkinter gui in python
root.mainloop()
