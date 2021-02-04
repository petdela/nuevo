drop database base_pag;
create database if not exists BASE_PAG;
use  BASE_PAG;

create table if not exists Rol(
Id_rol int,
Nombre varchar(100),
Descripcion varchar(100),
primary key(id_rol));

create table if not exists Usuarios(
fechaC timestamp default current_timestamp,
Correo varchar(50),
Nombres varchar(100),
Apellidos varchar(100),
Contrasena varchar(40),
Rol int,
primary key(Correo),
foreign key(Rol) references Rol(Id_rol));

create table if not exists Administrador(
Correo_ad varchar(50),
Id_administrador int,
ContrasenaCorr varchar(40),
primary key(Id_administrador),
foreign key(Correo_ad) references Usuarios(Correo));


create table if not exists Clientes(
Correo_cl varchar(50),
Id_cliente int auto_increment,
Foto blob,
primary key(Id_cliente),
foreign key(Correo_cl) references Usuarios(Correo));

create table if not exists Mail(
Id_correo int auto_increment,
Asunto varchar(100),
Remitente int,
Contenido JSON,
primary key(Id_correo),
foreign key(Remitente) references Administrador(Id_administrador));

create table if not exists Suscriptors(
Id_suscriptor int auto_increment,
DireccionCorreoE varchar(50),
fechaSus timestamp default current_timestamp,
primary key(Id_suscriptor));

create table if not exists MailSuscriptor(
Id_correoM int,
Suscriptor int,
fechaEnv timestamp default current_timestamp,
primary key(Id_correoM, suscriptor),
foreign key(Id_correoM) references Mail(Id_correo),
foreign key(Suscriptor) references Suscriptors(Id_suscriptor));

create table if not exists Resenas(
Estado varchar(2) default "a",
Id_resena int auto_increment,
Contenido varchar(255),
Usuario_res int,
primary key(Id_resena),
foreign key(Usuario_res) references Clientes(Id_cliente));

create table if not exists Modificacion(
Id_modificacion int auto_increment,
Nombre_mod varchar(50),
primary key(Id_modificacion));

create table if not exists LogResena(
Id_modresena int auto_increment,
Fecha timestamp default current_timestamp,
Resena int,
Modificacion int,
primary key(Id_modresena),
foreign key(Resena) references Resenas(Id_resena),
foreign key(Modificacion) references Modificacion(Id_modificacion));

create table if not exists Servicios(
Estado varchar(2) default "a",
MiniDes varchar (100),
Titulo varchar(100),
Codigo int auto_increment,
Contenido JSON,
Minit varchar(30),
primary key(Codigo));

create table if not exists LogModificacion(
Id_modificacion int auto_increment,
Fecha timestamp default current_timestamp,
Servicio int,
Modificacion int,
Usuario int,
primary key(Id_modificacion),
foreign key(Servicio) references Servicios(codigo),
foreign key(Modificacion) references Modificacion(Id_modificacion),
foreign key(Usuario) references Administrador(Id_administrador));

create table if not exists Visita(
Id_visita int auto_increment,
fecha_De date,
fecha_Hasta date,
num_visitas int,
primary key(Id_visita));

create table if not exists Web(
Id_consulta int auto_increment,
Usuario int,
Reporte int,
primary key(Id_consulta),
foreign key(Usuario) references Administrador(Id_Administrador),
foreign key(Reporte) references Visita(Id_Visita));

create table if not exists Contactos(
id_contacto int auto_increment,
Correo varchar(100),
Telefono varchar(100),
Direccion varchar(100),
Usuario int,
primary key(Id_contacto),
foreign key(Usuario) references Administrador(Id_administrador));

INSERT into Rol 
(Id_rol, Nombre, Descripcion) values
(1,"Administrador","Encargado de la gestion del contenido de la pagina web"), (2,"Cliente","Usuario registrado en la pagina web");

INSERT into Usuarios
(Correo, Nombres, Apellidos, Contrasena, Rol) values
("petterdelacruz99@outlook.com","Dino","Mendoza",MD5("contra"),1), ("example@outlook.com","Cliente1","Apellido1",MD5("abc"),2),
("example2@outlook.com","Cliente2","Apellido2",MD5("abcd"),2), ("example3@outlook.com","Cliente3","Apellido3",MD5("abcde"),2), 
("example4@outlook.com","Cliente4","Apellido4",MD5("abcdef"),2);

INSERT into Administrador
(Correo_ad, Id_administrador, ContrasenaCorr) values
("petterdelacruz99@outlook.com",1,"noEslaRealxd");

INSERT into Clientes
(Correo_cl) values
("example@outlook.com"),("example2@outlook.com"),("example3@outlook.com"),("example4@outlook.com");

INSERT into Mail
(Asunto) values ("Prueba");

INSERT into Suscriptors
(DireccionCorreoE) values ("petterdelacruz99@outlook.com"), ("sebastian.mendoza.199@gmail.com");

INSERT into MailSuscriptor
(Id_correoM, Suscriptor) values (1,1), (1,2);

INSERT into Resenas
(Usuario_res, Contenido) values (1,"hola1"), (2,"hola2"), (3, "hola3"), (4,"hola4");

INSERT into Modificacion
(Nombre_mod) values ("Cambio contenido"), ("Cambio titulo");

INSERT into LogResena
(Resena,Modificacion) values (1,1), (2,2), (1,2),(2,1);

INSERT into Servicios
(Codigo,Titulo,MiniDes,Minit,Contenido) values (1, "Auditoria Interna","Control y la vigilancia interna de una empresa o institución.","/Auditoria",
'{
    "auditoria": {
        "externa": {
            "descripcion": [
                "La auditoría externa es un sistema utilizado por las organizaciones para realizar un examen detallado, sistemático y crítico mediante un agente externo, ya sea una empresa ajena a la organización, un auditor especializado o un contador público.",
                "La función de este auditor, el cual no debe poseer un vínculo estrecho con la empresa, consiste en determinar y ofrecer una opinión acerca del sistema de información de la empresa y proponer asimismo cómo mejorar algunas técnicas.",
                "En definitiva, la auditoría externa analiza en detalle el sistema de información de una empresa, ya sean sus documentos, programas, expedientes y estados financieros, para otorgarles fiabilidad y validez."
            ],
             "objetivos": [
                "Investigar y determinar si la forma en que se emplea el sistema informático de la empresa es válida, verídica y correcta.",
	        "Verificar si existen posibles problemas a los cuales se enfrentará la empresa.",
	        "Resaltar los puntos fuertes y débiles de determinada toma de decisiones.",
                "Proponer sugerencias constructivas.",
		"Controlar las actividades relativas al desarrollo de la empresa.",
		"Ayudar a que la empresa tome decisiones exitosas y confiables."
            ]
        },
		"interna": {
            "descripcion": [
                "La auditoría interna es una actividad que se utiliza en las organizaciones para supervisar, dirigir, controlar y mejorar de manera integral las operaciones.",
                "Esta actividad se realiza de forma específica y objetiva, con un grupo de personas llamadas «auditores».",
                "Para que la auditoría interna pueda cumplir y ejecutar exitosamente sus objetivos, debe ser capaz de influir sobre los aspectos administrativos, organizacionales y estadísticos de la organización."
            ],
             "objetivos": [
                "Ayudar a que la organización dirija de forma exitosa los planes, riesgos y responsabilidades.",
	        "Verificar que los asuntos contables sean confiables y estables.",
	        "Vigilar y evaluar el funcionamiento interno y operativo.",
                "Preservar y salvaguardar los bienes acumulados.",
		"Detectar posibles problemas financieros y operativos para desarrollar su solución."
            ]
        }
    }
}'),
 (2, "Diseño Politicas","Diseño e implementación de reglamentos y procedimientos de control interno.","/DiseñoPoliticas",'{
  "politicas": {
    "generales": [
      "Marcan y definen las líneas generales de la empresa, son políticas que involucran a toda la  organización.  Deben ser conocidas por todos los trabajadores que integran el recurso humano de la compañía y servirles de guía."
    ],
    "departamentales": {
      "definicion": [
        "Incluye los principios a seguir por cada departamento o servicio."
      ],
      "tipos": [
        "Politica de Calidad",
        "Politica Medioambiental",
        "Politica de Prevencion de Riesgos"
      ]
    },
    "especificas": [
      "Fija los principios para actividades y proyectos concretos, pautadas a medida de dicho proyecto y suelen ser temporales."
    ]
  }
}'), 
 (3,"Consultoria","Asesoramiento en cuestiones técnicas de una empresa en sus diversas áreas.","/Consultorias",'{
    "consultoria": {
        
       "financiera": {
            "descripcion": [
                "Evalúamos las finanzas de la empresa y señalamos estrategias para hacerlas más organizadas."
            ]
        },
        "tributaria": {
            "descripcion": [
                "Verificamos el cumplimiento de las obligaciones tributarias de la compañía y determinamos si existen errores u omisiones en el cálculo de los impuestos, que pudieran ser observados y sancionadas por la Administración Tributaria (SRI)."
            ]    
        },
        "laboral": {
            "descripcion": [
                "diseñamos e implementamos políticas y sistemas de relaciones laborales acordes con la estrategia de la empresa, asesoramos en la gestión de las relaciones laborales y en la negociación colectiva"            
            ]   
                    
        }
    }
}'),
 (4,"Negociaciones","Reestructuración de Pasivos. Procesos de Fusión y Escisión.","/Negociaciones",'{
"negociacion":[
	{
	"titulo":"Concierto y reestructuración de pasivos",
	"subtitulo":"Reestructuración de Pasivos",
	"descripcion1":"Se realiza un estudio de la empresa y se elabora un plan de pago de acuerdo a los flujos proyectados que ésta tenga, tratando de disminuir siempre la carga financiera y optimizando el uso de las garantías.Posteriormente se negocia con los acreedores un plan de pago que considere los intereses de la empresa y de sus acreedores.",
	"descripcion2":"La reestructuración de pasivos es el cambio de un pasivo no favorable por otro más favorable. Reestructurar significa modificar la estructura, por ello no se cambia de tipo de financiamiento, sigue siendo pasivo.Lo que cambian son las condiciones del pasivo, es decir: El plazo, La tasa y las condiciones de pago."
	},
	{
	"informacion":"Hay diversos factores por los que es necesario realizar una reestructuracion de pasivos:",
	"lista":[
		{
		"superior":"Caída de las ventas",
		"inferior":"Factor que implica realizar reestructuración de pasivos"
		},
		{
		"superior":"Incremento de los costos",
		"inferior":"Factor que implica realizar reestructuración de pasivos"
		},
		{
		"superior":"Cambio en la economía del país",
		"inferior":"Factor que implica realizar reestructuración de pasivos"
		},
		{
		"superior":"Incremento de las tasas de interés",
		"inferior":"Cuando el contrato del crédito se haya realizado con interés variable"
		}
	]
	}
]
}');

INSERT into LogModificacion
(Servicio,Modificacion, Usuario) values (1,1, 1);

INSERT into Visita
(fecha_DE,fecha_Hasta,num_visitas) values ("2021-02-01","2021-02-28", 30);

INSERT into Web
(Usuario,Reporte) values (1,1);

INSERT into Contactos
(Correo,Telefono,Direccion,Usuario) values ("cpadinomendozac@gmail.com","+593 0992931213","Colón 561 y Boyacá Edif. Pegar Piso 2 Of 203
Guayas, Guayaquil, Ecuador",1);
