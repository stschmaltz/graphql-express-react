import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_AUTHORS = gql`
  {
    authors {
      name
      books {
        title
      }
    }
  }
`;
const HomePage = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <ul>
        {data.authors.map(author => (
          <li>
            <h3>{author.name}</h3>
            <ul>
              {author.books.map(book => (
                <li>
                  <h6>{book.title}</h6>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
