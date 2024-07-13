"use client"
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
// import { PriceServiceConnection } from "@pythnetwork/price-service-client";
import { fetchSwitchboardPrice } from "@/lib/fetchSwitchboardPrice";
import { connection, priceIds, symbols } from "@/lib/constants";


  interface IPriceData {
    symbol: string,
    price: number
  }


  export function PriceListTable() {
    const [dataFeed, setDataFeed] = useState<IPriceData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        async function fetchPrices() {
            try {

              const pythIds = symbols.map((symbol) => priceIds[symbol].pyth);
              const priceFeeds = await connection.getLatestPriceFeeds(pythIds);
      
              const pythPrices: { [key: string]: number } = {};

              priceFeeds?.forEach((priceFeed: any, index) => {
                if (priceFeed && priceFeed.price) {
                  pythPrices[symbols[index]] =
                    Number(priceFeed.price.price) /
                    Math.pow(10, -priceFeed.price.expo);
                }
              });
      
              // Fetch Switchboard prices
              const switchboardPrices = await Promise.all(
                symbols.map((symbol) => fetchSwitchboardPrice(symbol))
              );
      
              const newFeedData = symbols.map((symbol, index) => {
                const pythPrice = pythPrices[symbol];
                const switchboardPrice = switchboardPrices[index];

                const averagePrice =
                  pythPrice !== undefined && switchboardPrice !== undefined
                    ? (pythPrice + switchboardPrice) / 2
                    : pythPrice ?? switchboardPrice;
      
                return {
                  symbol,
                  price: averagePrice,
                };
              });
      
              setDataFeed(newFeedData);
            } catch (error) {
              console.error("Failed to fetch prices:", error);
            } finally {
              setLoading(false);
            }
          }

        fetchPrices()

        setInterval(fetchPrices, 7000);

        return () => clearInterval(setInterval(fetchPrices, 7000));
    }, []);

    return (
        <div className="border-[1px] border-white shadow-lg bg-gradient-to-r from-blue-900 to-sky-900">
            <Table className="">
                <TableHeader className="bg-gray-700 rounded-t-lg">
                    <TableRow className="text-center">
                        <TableHead className="text-gray-200 font-semibold">Symbol</TableHead>
                        <TableHead className="text-gray-200 font-semibold">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataFeed.map((feed) => (
                        <TableRow key={feed.symbol}>
                        <TableCell className="font-medium text-gray-200">{feed.symbol}</TableCell>
                        <TableCell className="text-gray-200">${feed.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
  }
  