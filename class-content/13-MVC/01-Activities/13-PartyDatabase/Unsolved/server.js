const orm = require("./orm")

// orm.selectOneThing("party_name", "parties").
const col = 'party_name';
const table = 'parties';

// console.table(orm.selectOneThing(col, table));

async function TheFunction(){
    const o = await orm.selectOneThing(col, table);

};

TheFunction();