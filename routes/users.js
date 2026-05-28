import express from "express";
const router = express.Router();

let users = [];

// CREATE
router.post("/", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = { id: users.length + 1, name, age };
    users.push(user);

    return res.status(201).json({
        message: "User successfully created",
        user
    });
});

// GET ALL
router.get("/", (req, res) => {
    res.json(users);
});

// GET BY ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id); //initialised u and find till u.id === id

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
        message: "User found",
        user
    });
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (age) user.age = age;

    return res.status(200).json({
        message: "User updated successfully",
        user
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    return res.status(200).json({
        message: "User deleted successfully"
    });
});

export default router;