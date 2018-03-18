
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

// Hardcoded data

/*
const Customers = [
    {id: '1', name: 'joe Doe', email: 'jon@gmail.com', age: 35},
    {id: '2', name: 'steve Smith', email: 'steve@gmail.com', age: 30},
    {id: '3', name: 'Sara Williams', email: 'sara@gmail.com', age: 45},
    {id: '4', name: 'Miki Berkovits', email: 'miki@gmail.com', age: 25}
];
*/
// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () =>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},

    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () =>({
        Customer:{
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
               return axios.get('http://localhost:4051/Customers/' + args.id)
                .then(res => res.data);
                  //  return Customers.find(x=> x.id == args.id);
            }
        },        
        Customers:{
            type: new GraphQLList(CustomerType),
            resolve(){
                return axios.get('http://localhost:4051/Customers' )
                .then(res => res.data);
            }
        }
    })    
});

module.exports = new GraphQLSchema({
    query: RootQuery
});