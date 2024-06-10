# Read-Renaissance Database

## Overview

Read-Renaissance is a database solution tailored for libraries and community centers to efficiently manage large collections of books and other media. This SQL-based system is designed to streamline operations such as book transactions, patron management, event scheduling, and staff administration.

## Features

- **Patron Management**: Keep track of all patron details including membership information, contact details, and transaction history.
- **Book Inventory**: Manage a comprehensive list of books, including details like author, ISBN, genre, and publication year.
- **Transaction Handling**: Log and track borrowing and returns of books, including details about the patron and staff involved.
- **Event Management**: Organize and manage library events with details on attendance, linked to both patrons and staff.
- **Staff Administration**: Maintain records of library staff, including roles and responsibilities.

## Database Schema

The database consists of the following tables:

- **Patrons**: Records details of library members.
- **Books**: Information about each book or media item.
- **Book Transactions**: Logs the lending and returning of books.
- **Book Transaction Details**: Details each transaction with dates and book IDs.
- **Patron Events**: Manages events occurring within the library.
- **Staff**: Keeps track of all library staff members.
- **Patron Events Attendance**: Records which patrons attend which events.

## Setup Instructions

1. **Prerequisites**:
   - Ensure you have MySQL or MariaDB installed on your server.
   - A system you will use to host the database.
   - Web proxy server such as nginx.
   - Obtain the necessary credentials to access your database server.
   - Dependencies for utilizing this system: cors, express, db, mysql2 (refer to the package.json for specific version)

3. **Database Creation**:
   - Connect to your database server using a command-line client or a GUI like MySQL Workbench.
   - Create a new database: `CREATE DATABASE read_renaissance;`
   - Select the database: `USE read_renaissance;`

4. **Importing the Schema**:
   - Navigate to the directory containing the SQL schema file.
   - Run the following command to import the schema: `mysql -u [username] -p read_renaissance < schema_file.sql`
   - Replace `[username]` with your database username and `schema_file.sql` with the path to your schema file.

5. **Adding Initial Data**:
   - Optionally, you can import initial data using a similar command: `mysql -u [username] -p read_renaissance < data_file.sql`

6. **Set-up Backend**: run app.js with whatever node process manager you have (I use pm2) and/or set up your web proxy

## Usage

After setting up the database, you can begin performing CRUD (Create, Read, Update, Delete) operations using SQL queries or through the connected application interface.

If you are self-hosting, simply open your web-browser and type localhost: (port number you opened for the site)

If everything is set-up correctly, you will be greeted with this homepage:

![image](https://github.com/CreamCheese-dev/Library_DB/assets/97072286/4aa56986-afaa-4ae4-89d1-bd5a33fc20db)

