const express = require('express')
const pool = require("./db")
const route = express.Router()

// create new workspace

route.post("/workspace", async (req, res) => {
    try {
        const wsname = req.query.wsname;
        const ws_des = req.query.ws_des;
        const ws_lat = req.query.ws_lat;
        const ws_long = req.query.ws_long;
        const ws_link = req.query.ws_link;
        const totalseat = req.query.totalseat;
        const wifi = req.query.wifi;
        const poweroutlet = req.query.poweroutlet;
        // console.log(req);
        console.log("req.body");
        console.log(req.body);
        console.log("req.query");
        console.log(req.query);
        const newWorkspace = await pool.query(
            "INSERT INTO Workspace (wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi , poweroutlet) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
            [wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet]
        );
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});


// show all workspace 

route.get("/workspace", async (req, res) => {
    try {
        const allWorkspace = await pool.query("SELECT * FROM workspace");
        res.json(allWorkspace);
    } catch (err) {
        console.error(err.message);
    }
});


//modify a workspace's WSName

route.put("/workspace/wsname/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updateWSName = await pool.query(
            "UPDATE workspace SET WSName = $1 WHERE WorkspaceID = $2",
            [wsname, WorkspaceID]
        );
        res.json("The name was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//modify a workspace's WS_Des

route.put("/workspace/WS_Des/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updateWS_Des = await pool.query(
            "UPDATE workspace SET WS_Des = $1 WHERE WorkspaceID = $2",
            [ws_des, WorkspaceID]
        );
        res.json("The WS_Des was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//modify a workspace's coordinate

route.put("/workspace/coordinate/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updateCoor = await pool.query(
            "UPDATE workspace SET WS_lat=$1 and WS_long = $2 WHERE WorkspaceID = $3",
            [ws_lat, ws_long, WorkspaceID]
        );
        res.json("The coordinate was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//modify a workspace's totalseats

route.put("/workspace/totalseats/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updateTotalseats = await pool.query(
            "UPDATE workspace SET totalseat = $1 WHERE WorkspaceID = $2",
            [totalseat, WorkspaceID]
        );
        res.json("The totalseats was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//modify a workspace's wifi

route.put("/workspace/wifi/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updateWifi = await pool.query(
            "UPDATE workspace SET wifi = $1 WHERE WorkspaceID = $2",
            [wifi, WorkspaceID]
        );
        res.json("The wifi status was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//modify a workspace's poweroutlets

route.put("/workspace/poweroutlets/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { wsname, ws_des, ws_lat, ws_long, ws_link, totalseat, wifi, poweroutlet } = req.body;
        const updatePowOL = await pool.query(
            "UPDATE workspace SET poweroutlets = $1 WHERE WorkspaceID = $2",
            [poweroutlet, WorkspaceID]
        );
        res.json("The poweroutlets was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a workspace

route.delete("/workspace/:Workspace_ID", async (req, res) => {
    try {
        const { Workspace_ID } = req.params;
        const deleteWorkspace = await pool.query(
            "DELETE FROM workspace WHERE Workspace_ID = $1",
            [Workspace_ID]
        );
        res.json("The workspace was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});



// add new photo record to a workspace

route.post("/pic", async (req, res) => {
    try {
        const { photo1, photo2, photo3, WorkspaceID } = req.body;
        const newMenurec = await pool.query(
            "INSERT INTO ws_photo (photo1, photo2, photo3, WorkspaceID) VALUES($1,$2,$3,$4) RETURNING *",
            [photo1, photo2, photo3, WorkspaceID]
        );
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

// update photo1

route.put("/pic/photo1/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { photo1, photo2, photo3 } = req.body;
        const updatephoto1 = await pool.query(
            "UPDATE ws_photo SET photo1 = $1 WHERE WorkspaceID = $2",
            [photo1, WorkspaceID]
        );
        res.json("Photo1 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// update photo2

route.put("/pic/photo2/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { photo1, photo2, photo3 } = req.body;
        const updatephoto2 = await pool.query(
            "UPDATE ws_photo SET photo2 = $1 WHERE WorkspaceID = $2",
            [photo2, WorkspaceID]
        );
        res.json("Photo2 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// update photo3

route.put("/pic/photo3/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { photo1, photo2, photo3 } = req.body;
        const updatephoto3 = await pool.query(
            "UPDATE ws_photo SET photo3 = $1 WHERE WorkspaceID = $2",
            [photo3, WorkspaceID]
        );
        res.json("Photo3 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


// add new menu record to a workspace

route.post("/menu", async (req, res) => {
    try {
        const { menu1, menu2, menu3, WorkspaceID } = req.body;
        const newMenurec = await pool.query(
            "INSERT INTO ws_menu (menu1, menu2, menu3, WorkspaceID) VALUES($1,$2,$3,$4) RETURNING *",
            [menu1, menu2, menu3, WorkspaceID]
        );
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

// update menu1

route.put("/pic/menu1/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { menu1, menu2, menu3 } = req.body;
        const updatemenu1 = await pool.query(
            "UPDATE ws_menu SET menu1 = $1 WHERE WorkspaceID = $2",
            [menu1, WorkspaceID]
        );
        res.json("Menu1 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// update menu2

route.put("/pic/menu2/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { menu1, menu2, menu3 } = req.body;
        const updatemenu2 = await pool.query(
            "UPDATE ws_menu SET menu2 = $1 WHERE WorkspaceID = $2",
            [menu2, WorkspaceID]
        );
        res.json("Menu2 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

// update menu3

route.put("/pic/menu3/:WorkspaceID", async (req, res) => {
    try {
        const { WorkspaceID } = req.params;
        const { menu1, menu2, menu3 } = req.body;
        const updatemenu3 = await pool.query(
            "UPDATE ws_menu SET menu3 = $1 WHERE WorkspaceID = $2",
            [menu3, WorkspaceID]
        );
        res.json("Menu3 was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = route