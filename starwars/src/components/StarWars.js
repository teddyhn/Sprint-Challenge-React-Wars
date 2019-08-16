import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './StarWars.css';

import axios from 'axios';

export default function StarWars() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/', {
                params: {}
            })
            .then(response => {
                const data = response.data.results;
                setData(data);
            })
    }, []);

    console.log(data);

    return (
        <CardDeck>
            {data.map(character => {
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{`Born: ${character.birth_year}`}</ListGroupItem>
                            <ListGroupItem>{`Gender: ${character.gender}`}</ListGroupItem>
                            <ListGroupItem>{`Height: ${character.height}cm`}</ListGroupItem>
                            <ListGroupItem>{`Mass: ${character.mass}kg`}</ListGroupItem>
                        </ListGroup>
                    </Card>
                )
            })}
        </CardDeck>
    );
}