"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageController = void 0;
const uuid_1 = require("uuid");
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
function choseMsg() {
    const random = Math.floor(Math.random() * msgList.length);
    return msgList[random];
}
/**
 *
 * @route POST /
 * @desc  Add a new result to the list
 * @param {Request <{},{},Partial<Result>>} req
 * @param {Response} res
 * @returns {void}
 */
function addResult(req, res) {
    const resultName = req.body.name ? req.body.name : "Anonymous";
    const msg = choseMsg();
    const newReasult = Object.assign({ id: (0, uuid_1.v4)(), name: resultName }, msg);
    resultList.push(newReasult);
    res.render("index", { resultList: resultList });
}
function getResultList() {
    resultList: Result[] = exports.pageController.getResultList();
    res.status(200).render("index", { title: "Home", resultList: resultList });
    return resultList;
}
exports.pageController = {
    addResult,
};
