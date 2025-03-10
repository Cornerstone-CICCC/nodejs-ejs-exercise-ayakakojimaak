import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const websiteTitle = "DailyFortune";

// lib
interface Msg {
  key: number;
  title: string;
  content: string;
  color: string;
}

interface Result extends Msg {
  id: string;
  name: string;
}

const msgList: Msg[] = [
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

let resultList: Result[] = [];
const resultNameSet: Set<string> = new Set();

function choseMsg(): Msg {
  const random = Math.floor(Math.random() * msgList.length);
  return msgList[random];
}

// Routes
const pageRouter = Router();

/**
 *
 * @route GET /
 * @desc  Get all results
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
pageRouter.get("/", (req: Request, res: Response) => {
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
pageRouter.post("/", function (req: Request, res: Response) {
  let err = "";
  if (req.body.name && req.body.name.trim() !== "") {
    const resultName: string = req.body.name;
    const findResult = resultList.find((result) => result.name === resultName);
    if (findResult) {
      err = "You have already checked your fortune today";
    } else {
      const msg = choseMsg();
      const newResult: Result = {
        id: uuidv4(),
        name: resultName,
        ...msg,
      };
      resultList.push(newResult);
    }
  } else {
    err = "Please enter your name";
  }
  res.render("index", {
    title: websiteTitle,
    resultList: resultList,
    pageTitle: "See your fortune for today!",
    err: err,
  });
});

pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", {
    title: websiteTitle,
    pageTitle: "about",
  });
});

pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact", {
    title: websiteTitle,
    pageTitle: "contact",
  });
});

export default pageRouter;
