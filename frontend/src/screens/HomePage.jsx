import React from "react";
import { useGetUserQuery } from "../slices/userApiSlice";
import Loader from "../components/Loader";
import { Col, Row, Container } from "react-bootstrap";

const HomePage = () => {
  const { data, error, isLoading } = useGetUserQuery();
  console.log(data);
  return (
    <div className="App">
      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <div className="mt-5">
          <Loader />
        </div>
      ) : data ? (
        <Container>
          <Row className="justify-content-center mt-5">
            <Col md={6} className="text-center">
              {data.map(({ _id, name, email }) => (
                <div key={_id}>
                  <h1>{name}</h1>
                  <p>{email}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      ) : null} */}

      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center">
            {data?.map((dt) => (
              <div key={dt._id}>
                <h1>{dt.name}</h1>
                <p>{dt.email}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
