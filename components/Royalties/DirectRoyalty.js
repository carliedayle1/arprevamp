import { useState, useMemo } from "react";
import { API_URL, ROYALTY_PER_PAGE } from "config";
import useSWR from "swr";
import { Loader } from "react-overlay-loader";
import { Table } from "react-bootstrap";
import dayjs from "dayjs";

const DirectRoyalty = ({ directTotal, user }) => {
  const [directPage, setDirectPage] = useState(1);

  const [directStart, setDirectStart] = useState(
    Number(directPage) === 1
      ? 0
      : (Number(directPage) - 1) * Number(ROYALTY_PER_PAGE)
  );

  const directRoyaltyQuery = async () => {
    const query = await fetch(
      `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Direct&_limit=${ROYALTY_PER_PAGE}&_start=${directStart}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return query.json();
  };

  const { data: directRoyalties, error: directRoyaltyError } = useSWR(
    `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Direct&_limit=${ROYALTY_PER_PAGE}&_start=${directStart}`,
    directRoyaltyQuery
  );

  const directLastPage = useMemo(() =>
    Number(Math.ceil(Number(directTotal) / Number(ROYALTY_PER_PAGE)))
  );

  const directNextButtonHandler = () => {
    let next = +directPage + 1;
    setDirectPage(directPage + 1);
    setDirectStart(
      Number(next) === 1 ? 0 : (Number(next) - 1) * Number(ROYALTY_PER_PAGE)
    );
  };

  const directPrevButtonHandler = () => {
    let prev = +directPage - 1;
    setDirectPage(directPage - 1);
    setDirectStart(
      Number(prev) === 1 ? 0 : (Number(prev) - 1) * Number(ROYALTY_PER_PAGE)
    );
  };

  return (
    <>
      {directRoyaltyError && <div className="mr-2">{directRoyaltyError}</div>}
      {!directRoyalties && <Loader fullPage loading />}
      {directRoyalties && directRoyalties.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>ISBN</th>
                <th>Format</th>
                <th>Source</th>
                <th>Quantity</th>
                <th>Net Sale</th>
                <th>Percentage</th>
                {/* <th>Withdraw Eligible</th> */}
                <th>Author Earning</th>
                <th>Claimed</th>
              </tr>
            </thead>
            <tbody>
              {directRoyalties.length > 0 &&
                directRoyalties.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.title}</td>
                    <td>{dayjs(item?.date).format("MMM DD")}</td>
                    <td>{item?.isbn}</td>
                    <td>{item?.bookFormat}</td>
                    <td>{item?.source}</td>
                    <td>{item?.quantity}</td>
                    <td>${item?.netsale}</td>
                    <td>{item?.percentage}%</td>
                    {/* <td>{item?.withdrawEligible}</td> */}
                    <td>${item?.authorEarning}</td>
                    <td>{item?.claimed == false ? "No" : "Yes"}</td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {directPage > 1 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={directPrevButtonHandler}
                      >
                        Prev
                      </button>
                    </li>
                  )}

                  {directPage < directLastPage && (
                    <li className="page-item">
                      <a
                        className="page-link pointer"
                        onClick={directNextButtonHandler}
                      >
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </>
      ) : (
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          No royalties available
        </div>
      )}
    </>
  );
};

export default DirectRoyalty;
