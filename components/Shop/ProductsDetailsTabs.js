import { useState, Fragment } from "react";
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
resetIdCounter();

const ProductsDetailsTabs = ({ product }) => {
  const [bookType, setBookType] = useState(product?.prices);

  return (
    <div className="products-details-tabs">
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          {/* <Tab>Review</Tab> */}
        </TabList>

        <TabPanel>
          <div className="products-description">
            <p>{product && product?.description}</p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="products-description">
            <ul className="additional-information">
              <li>
                <Row>
                  <Col sm={12} md={3} lg={2}>
                    Book Type
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    {product?.book_types.map((type) => (
                      <Fragment key={type?.id}>{`${type?.name}, `}</Fragment>
                    ))}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col sm={12} md={3} lg={2}>
                    <span>Contributor/Author</span>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Link href={`/authors/${product?.author?.username}`}>
                      <a>
                        {`${product?.author?.firstname} ${product?.author?.lastname}`}
                      </a>
                    </Link>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col sm={12} md={3} lg={2}>
                    <span>Categories</span>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    {product?.categories.map((cat) => (
                      <Fragment key={cat?.id}>{`${cat.name}, `}</Fragment>
                    ))}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col sm={12} md={3} lg={2}>
                    <span>Dimensions</span>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <Table size="sm">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Weight</th>
                          <th>Width</th>
                          <th>Length</th>
                          <th>Height</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product?.book_types.map(
                          (type) =>
                            type?.name !== "Ebook" && (
                              <tr key={type?.id}>
                                <td>{type?.name}</td>
                                <td>{type?.weight}g</td>
                                <td>{type?.width}cm</td>
                                <td>{type?.bookLength}cm</td>
                                <td>{type?.height}cm</td>
                              </tr>
                            )
                        )}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
        </TabPanel>

        {/* <TabPanel>
          <div className="products-reviews">
            <h3>Customer Reviews</h3>
            <p>There are no reviews yet.</p>

            <form className="review-form">
              <p>Rate this item:</p>

              <div className="star-rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>

                <p>Very good product!</p>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      name="review-message"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Write your review*"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default ProductsDetailsTabs;
