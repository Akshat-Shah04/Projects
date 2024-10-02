# Software Requirements Specification (SRS)

## Project: User Management System 

### Table of Contents

1. [Introduction](#introduction)
    - 1.1 [Purpose](#purpose)
    - 1.2 [Scope](#scope)
    - 1.3 [Definitions, Acronyms, and Abbreviations](#definitions-acronyms-and-abbreviations)
    - 1.4 [References](#references)
2. [Overall Description](#overall-description)
    - 2.1 [Product Perspective](#product-perspective)
    - 2.2 [Product Features](#product-features)
    - 2.3 [User Classes and Characteristics](#user-classes-and-characteristics)
    - 2.4 [Operating Environment](#operating-environment)
    - 2.5 [Design and Implementation Constraints](#design-and-implementation-constraints)
    - 2.6 [Assumptions and Dependencies](#assumptions-and-dependencies)
3. [Specific Requirements](#specific-requirements)
    - 3.1 [Functional Requirements](#functional-requirements)
    - 3.2 [Performance Requirements](#performance-requirements)
    - 3.3 [Security Requirements](#security-requirements)
    - 3.4 [Interface Requirements](#interface-requirements)
4. [Appendices](#appendices)

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the software requirements for the **User Management System 2.0**. This system allows users to create, update, delete, and search user records in a database, providing basic CRUD functionality through a graphical interface.

### 1.2 Scope
The **User Management System 2.0** will provide an interface for managing users in a database. The application will allow users to:
- Insert new user records.
- Update existing user information.
- Delete user records based on their unique ID.
- Search for users by ID or Name.
- Display all users in the system.

This document outlines the requirements needed to implement the system, including functional, performance, and security specifications.

### 1.3 Definitions, Acronyms, and Abbreviations
- **CRUD**: Create, Read, Update, Delete operations.
- **GUI**: Graphical User Interface.
- **ID**: Unique identifier for users.
- **SQL**: Structured Query Language used to manage data in relational databases.

### 1.4 References
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Tkinter Python GUI Documentation](https://docs.python.org/3/library/tkinter.html)
- [Python PEP8 Style Guide](https://www.python.org/dev/peps/pep-0008/)

---

## 2. Overall Description

### 2.1 Product Perspective
The **User Management System 2.0** is a standalone application built using the Python programming language. It uses the `Tkinter` library for the graphical interface and `pymysql` for database interaction. The system interacts with a `MySQL` database to store and manage user data.

### 2.2 Product Features
- **Insert Data**: Allows users to insert new records with ID, Name, EmailID, and Password.
- **Update Data**: Allows users to update existing user details.
- **Delete Data**: Allows users to delete records using their unique ID.
- **Search Data**: Allows users to search for records by ID or Name.
- **Display Data**: Shows all the records in the database.

### 2.3 User Classes and Characteristics
- **Admin Users**: Have full access to create, update, delete, search, and view user records. Must have basic knowledge of how to interact with the system’s GUI.
  
### 2.4 Operating Environment
- **Operating System**: Windows, macOS, Linux.
- **Database**: MySQL Server (version 5.7+).
- **Programming Language**: Python 3.x.
- **Python Libraries**: `Tkinter`, `pymysql`.

### 2.5 Design and Implementation Constraints
- The system must be implemented in Python.
- User IDs must be unique across all records.
- Email IDs should be unique to avoid duplication.

### 2.6 Assumptions and Dependencies
- The user has access to a MySQL database running locally or remotely.
- Python 3.x and required libraries are installed on the user's system.
- The database schema for the `User` table includes the fields `ID`, `Name`, `EmailID`, and `Password`.

---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Insert Data
- The system shall allow the admin user to add a new user by providing an ID, Name, EmailID, and Password.
- If any field is left blank, the system will display an error message.

#### 3.1.2 Update Data
- The system shall allow the admin user to update user details such as Name, EmailID, or Password based on a provided user ID.
- If no ID is provided, the system will not execute the update.

#### 3.1.3 Delete Data
- The system shall allow the admin user to delete a user based on the unique ID.
- If no ID is provided, the system will display an error message.

#### 3.1.4 Search Data
- The system shall allow the admin user to search for users by ID or Name.
- The results will display in the application’s console.

#### 3.1.5 Display Data
- The system shall display all user records in the console in a tabular format.

### 3.2 Performance Requirements
- The system should execute database queries (insert, update, delete, search) within 2 seconds.
- The system should be able to handle up to 1,000 user records without significant degradation in performance.

### 3.3 Security Requirements
- The system should validate all user input to prevent SQL injection attacks.
- Only the admin users shall have access to modify user data.

### 3.4 Interface Requirements
- The system shall use a `Tkinter` graphical user interface (GUI) for user interaction.
- The system shall provide visual feedback for successful or failed operations through the console log.

---

## 4. Appendices

### 4.1 Database Schema

#### Table: `User`
| Field      | Type        | Constraints           |
|------------|-------------|-----------------------|
| ID         | INT         | PRIMARY KEY, UNIQUE   |
| Name       | VARCHAR(255)| NOT NULL              |
| EmailID    | VARCHAR(255)| NOT NULL, UNIQUE      |
| Password   | VARCHAR(255)| NOT NULL              |

### 4.2 Python Libraries
- **Tkinter**: Used for the graphical user interface.
- **pymysql**: Used for interacting with the MySQL database.
