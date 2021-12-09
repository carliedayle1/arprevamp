import { useState, useMemo } from "react";
import { API_URL, ROYALTY_PER_PAGE } from "config";
import useSWR from "swr";
import { Loader } from "react-overlay-loader";
import { Table } from "react-bootstrap";
import dayjs from "dayjs";

const IndirectRoyalty = ({ user }) => {
  const [indirectPage, setIndirectPage] = useState(1);

  const [indirectStart, setIndirectStart] = useState(
    Number(indirectPage) === 1
      ? 0
      : (Number(indirectPage) - 1) * Number(ROYALTY_PER_PAGE)
  );

  const indirectQuery = async () => {
    const query = await fetch(
      `${API_URL}/royalties/count?arpNumber=${user?.arpNumber}&type=Indirect`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return query.json();
  };

  const { data: indirectTotal, error: indirectError } = useSWR(
    `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Direct`,
    indirectQuery
  );

  const indirectRoyaltyQuery = async () => {
    const query = await fetch(
      `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Indirect&_limit=${ROYALTY_PER_PAGE}&_start=${indirectStart}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return query.json();
  };

  const { data: indirectRoyalties, error: indirectRoyaltyError } = useSWR(
    `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Indirect&_limit=${ROYALTY_PER_PAGE}&_start=${indirectStart}`,
    indirectRoyaltyQuery
  );

  const indirectLastPage = useMemo(() =>
    Number(Math.ceil(Number(indirectTotal) / Number(ROYALTY_PER_PAGE)))
  );

  const indirectNextButtonHandler = () => {
    let next = +indirectPage + 1;
    setIndirectPage(indirectPage + 1);
    setIndirectStart(
      Number(next) === 1 ? 0 : (Number(next) - 1) * Number(ROYALTY_PER_PAGE)
    );
  };

  const indirectPrevButtonHandler = () => {
    let prev = +indirectPage - 1;
    setIndirectPage(indirectPage - 1);
    setIndirectStart(
      Number(prev) === 1 ? 0 : (Number(prev) - 1) * Number(ROYALTY_PER_PAGE)
    );
  };

  return (
    <>
      {indirectRoyaltyError && (
        <div className="mr-2">{indirectRoyaltyError}</div>
      )}
      {indirectError && <div className="mr-2">{indirectError}</div>}
      {!indirectRoyalties && <Loader fullPage loading />}
      {indirectRoyalties && indirectRoyalties.length > 0 ? (
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {indirectRoyalties.length > 0 &&
                indirectRoyalties.map((item) => (
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
                    <td>{item?.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {indirectPage > 1 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={indirectPrevButtonHandler}
                      >
                        Prev
                      </button>
                    </li>
                  )}

                  {indirectPage < indirectLastPage && (
                    <li className="page-item">
                      <a
                        className="page-link pointer"
                        onClick={indirectNextButtonHandler}
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

export default IndirectRoyalty;
