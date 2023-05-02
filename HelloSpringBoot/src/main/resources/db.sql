create database ServletWithVNH
go
use ServletWithVNH
go

create table Employee (
	id int identity(1,1) primary key,
	code varchar(20),
	name nvarchar(50),
	password nvarchar(max),
	email nvarchar(50),
	status bit
)
