CREATE DATABASE findspace;

CREATE TABLE Workspace(
    workspace_id SERIAL PRIMARY KEY,
    WS_Des varchar(255),
    WSName varchar(255),
    WS_lat NUMERIC(10,7),
    WS_long NUMERIC(10,7),
    wifi boolean,
    totalseats INT,
    poweroutlets INT
);

CREATE TABLE Users(
    email varchar(255) PRIMARY KEY,
    uname varchar(255),
    password varchar(255),
    hasPremium boolean
);

CREATE TABLE Likes(
	FOREIGN KEY (workspace_id) REFERENCES Workspace (workspace_id) ,
	FOREIGN KEY (email) REFERENCES Users (email)
);


-- req.body JSON in postman
{
    "WS_Des" : "such a beautiful place. Full of scumbag",
    "WSName" : "False Coffee",
    "WS_lat" : 13.8798710,
    "WS_long" : 100.9081309,
    "WS_link" : "Link Krub",
    "wifi" : false,
    "totalseats" : 180,
    "poweroutlets" : 1
}

{
    email : "aungpyae_official@gmail.com",
    uname : "eieizahahaplus",
    password : "blaballba",
    hasPremium : true
}

-- Arrange WS order by crowdednessStatus
SELECT R1.workspaceid, R2.workspaceid,R2.wsname, R2.ws_lat, R2.ws_long, R1.ppl_in_WS, R2.totalseat, R1.ppl_in_WS/R2.totalseat AS crowdedness, R3.photo1, R3.photo2, R3.photo3, R4.feedbacktime, R4.feedbackstatus,
CASE WHEN R1.ppl_in_WS/R2.totalseat<=0.25 THEN 1
WHEN R1.ppl_in_WS/R2.totalseat>0.25 AND R1.ppl_in_WS/R2.totalseat <= 0.5 THEN 3
ELSE 5
END AS crowdednessStatus
FROM ( SELECT DISTINCT workspaceid, SUM(H.num_in_out) AS ppl_in_WS 
	  FROM hardware H 
	  GROUP BY workspaceid) 
	  AS R1,
	  
	  ( SELECT DISTINCT * 
	   FROM workspace WS) AS R2, 
	   
	  ( SELECT DISTINCT * 
	   FROM ws_photo) AS R3,
	   
	   	  ( SELECT DISTINCT * 
	   FROM gives_feedback) AS R4

        
WHERE R1.workspaceid = R2.workspaceid AND R1.workspaceid = R3.workspaceid AND R1.workspaceid = R4.workspaceid
ORDER BY crowdednessStatus ASC