"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const websiteTitle = "DailyFortune";
const msgList = [
    {
        key: 1,
        title: "Great Blessing",
        content: "Everything will go well. Your wishes will come true, and you will find happiness.",
        color: "gold",
    },
    {
        key: 2,
        title: "Good Fortune",
        content: "Good things are coming your way. Be patient, and you will see positive results.",
        color: "lightgreen",
    },
    {
        key: 3,
        title: "Average Luck",
        content: "Things will be average. Stay calm and focused, and you will maintain balance.",
        color: "lightblue",
    },
    {
        key: 4,
        title: "Small Blessing",
        content: "Small joys will come your way. Appreciate the little things in life.",
        color: "pink",
    },
    {
        key: 5,
        title: "Average Luck",
        content: "Be cautious and careful. Avoid taking risks, and stay safe.",
        color: "gray",
    },
    {
        key: 6,
        title: "Great Bad Luck",
        content: "Be very careful. This is a time of challenges. Stay strong and seek support.",
        color: "darkred",
    },
    {
        key: 7,
        title: "Future Blessing",
        content: "Your hard work will pay off in the future. Keep moving forward.",
        color: "orange",
    },
    {
        key: 8,
        title: "Love Blessing",
        content: "Love and relationships will flourish. Cherish your connections.",
        color: "red",
    },
    {
        key: 9,
        title: "Wealth Blessing",
        content: "Financial prosperity is on the horizon. Manage your resources wisely.",
        color: "yellow",
    },
    {
        key: 10,
        title: "Health Blessing",
        content: "Your health will improve. Take care of your body and mind.",
        color: "limegreen",
    },
];
let resultList = [];
const resultNameSet = new Set();
function choseMsg() {
    const random = Math.floor(Math.random() * msgList.length);
    return msgList[random];
}
// Routes
const pageRouter = (0, express_1.Router)();
/**
 *
 * @route GET /
 * @desc  Get all results
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
pageRouter.get("/", (req, res) => {
    res.status(200).render("index", {
        title: websiteTitle,
        resultList: resultList,
        pageTitle: "See your fortune for today!",
        err: "",
    });
});
/**
 *
 * @route POST /
 * @desc  Add a new result to the list
 * @param {Request <{},{},Partial<Result>>} req
 * @param {Response} res
 * @returns {void}
 */
pageRouter.post("/", function (req, res) {
    let err = "";
    if (req.body.name && req.body.name.trim() !== "") {
        const resultName = req.body.name;
        const findResult = resultList.find((result) => result.name === resultName);
        if (findResult) {
            err = "You have already checked your fortune today";
        }
        else {
            const msg = choseMsg();
            const newResult = Object.assign({ id: (0, uuid_1.v4)(), name: resultName }, msg);
            resultList.push(newResult);
        }
    }
    else {
        err = "Please enter your name";
    }
    res.render("index", {
        title: websiteTitle,
        resultList: resultList,
        pageTitle: "See your fortune for today!",
        err: err,
    });
});
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", {
        title: websiteTitle,
        pageTitle: "about",
    });
});
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", {
        title: websiteTitle,
        pageTitle: "contact",
    });
});
exports.default = pageRouter;
