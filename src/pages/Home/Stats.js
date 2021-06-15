import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import api from "../../utils/api";
import { Spinner, BarChart } from "../../components/";

const Stats = () => {
  const [loading, setLoading] = useState(false);
  const [categoryChart, setCategoryChart] = useState([]);
  const [sourceChart, setSourceChart] = useState([]);
  const [redeemChart, setRedeemChart] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .getStats()
      .then((res) => {
        const { categoryStats, sourceStats, redeemStats } = res.data;
        setCategoryChart(categoryStats);
        setSourceChart(sourceStats);
        setRedeemChart(redeemStats);
      })
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);

  return (
    <Container>
      <h4 className="text-center display-4">
        <b>some vital stats...</b>
      </h4>

      <hr />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BarChart
            chart={categoryChart}
            label={"# Coupons Sold Per Category"}
          />
          <hr />
          <BarChart
            chart={sourceChart}
            label={"# Coupons Sold Per Source Platform"}
          />
          <hr />

          <BarChart
            chart={redeemChart}
            label={"# Coupons Sold Per Redeem Platform"}
          />
          <hr />
        </>
      )}
    </Container>
  );
};

export default Stats;
