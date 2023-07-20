/*--> Open for Extension but Closed for Modification <--*/
/*   
each if condition or type or role condition should have a seperate class defined
*/


function PrinQuizWrong(question) {
    question.forEach(({ description, type, option }, i) => {
        console.log(`Q${i + 1}-${description}`)
        switch (type) {
            case "boolean":
                console.log("1. true")
                console.log("2. false")
                break;
            case "mcq":
                option.forEach((o, i) => {
                    console.log(`${i + 1} ${o}`)
                })
                break;
            case "text":
                console.log("__________________________________")
        }
        console.log(" ")
    });
}

let questions = [
    {
        type: "boolean",
        description: "Is this question useful..!"
    },
    {
        type: "mcq",
        description: "Tick the correct one",
        option: ["abc", "bca", "cab", "bba"]
    },
    {
        type: "text",
        description: "Please define this in depth"
    }
]

PrinQuizWrong(questions)


// ========================================================================================
// create a seperate class for the question type to handle switch conditions

function PrinQuizRight(question) {
    console.log(question)
    question.forEach((question, i) => {
        console.log(`Q${i + 1}-${question.description}`)
        question.printQuestionChoices()
        console.log("")
    });
}

class BooleanQues {
    constructor({ description }) {
        this.description = description
    }
    printQuestionChoices() {
        console.log("1. true")
        console.log("2. false")
    }
}

class MCQQues {
    constructor({ description, options }) {
        this.description = description;
        this.options = options
    }
    printQuestionChoices() {
        this.options.forEach((o, i) => {
            console.log(`${i + 1} ${o}`)
        })
    }
}

class TextQues {
    constructor({ description }) {
        this.description = description
    }
    printQuestionChoices() {
        console.log("_____________________________")
    }
}

const newQuestion = [
    new BooleanQues({
        type: "boolean",
        description: "Is this question useful..!"
    }),
    new MCQQues({
        type: "mcq",
        description: "Tick the correct one",
        options: ["abc", "bca", "cab", "bba"]
    }),
    new TextQues({
        type: "text",
        description: "Please define this in depth"
    })
]

PrinQuizRight(newQuestion)
