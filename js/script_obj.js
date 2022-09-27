//const { result } = require("cypress/types/lodash");

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month',
        }, 
        showAgeAndLangs : function(plan_obj) {
            const {name, age, skills} = personalPlanPeter;
            const {languages, programmingLangs,exp} = personalPlanPeter.skills;
            result = `Мне ${age} и я владею языками: `;
            var langs = "";
            for (let i = 0; i<= languages.length-1; i++){
                langs = languages[i];
                result = result + langs.toUpperCase() + ' ';
            }
            return result;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(plan) {
    const {languages, programmingLangs, exp} = personalPlanPeter.skills;
    return exp;
    }

    function showProgrammingLangs(plan) {
        let result = "";
        for (let key in plan.skills.programmingLangs){
            if (plan.skills.programmingLangs[key] == ''){
                result = result + `Язык ${key} изучен на undefined` + '\n'; 
            } else{
            result = result + `Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}` + '\n'; }
            //console.log(`Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}` );
        }
        return result;
    }

