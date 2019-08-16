import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import './StarWars.css';

import axios from 'axios';

export default function StarWars() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState('');

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${page}`, {
                params: {}
            })
            .then(response => {
                const data = response.data.results;
                setData(data);
                const pageGrab = response.data.next;
                const page = parseInt(pageGrab.slice(pageGrab.length - 1)) - 1;
                setPage(page);
            })
    }, [page]);

    const pagesArray = [1, 2, 3, 4, 5];

    return (
        <div className="starwars">
            <Pagination>
                {pagesArray.map(page => {
                    return (
                        <PageItem 
                            key={page}
                            onClick={() => setPage(page)}
                        >
                            {page}
                        </PageItem>
                    )
                })}
            </Pagination>
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
        </div>
    );
}