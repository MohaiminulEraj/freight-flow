import React from "react";
import { useParams } from "react-router-dom";
import { useGetInvoiceQuery } from "../../../store/apis/invoiceApi";
import Spinner from "../../../components/preloader/Spinner";

const InvoiceEdit = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetInvoiceQuery(id);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-10">
                <Spinner color="#44C7F4" />
            </div>
        );
    }
    return (
        <>
            <div className="bg-white p-8 rounded-md h-full">
                <div className="flex items-center justify-between font-semibold text-lg border-b pb-4">
                    <div>Invoice</div>
                    <div>#{data?.invoice_number}</div>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <div>
                        <div className="italic">BILL TO</div>
                        <div className="font-bold">{data?.customer.name}</div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            <div className="italic">Issued Date</div>
                            <div className="font-bold">
                                {data?.invoice_issue_date}
                            </div>
                        </div>
                        <div>
                            <div className="italic">Due Date</div>
                            <div className="font-bold">
                                {data?.invoice_due_date}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex items-start justify-between">
                        <div className="font-bold text-base italic">
                            Service Details
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="italic">MAWB: </div>
                                <div className="font-bold text-right">
                                    {data?.master_air_way_bill}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="italic">Destination: </div>
                                <div className="font-bold text-right">
                                    {data?.destination}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="italic">Cartoon Amount: </div>
                                <div className="font-bold text-right">
                                    {data?.cartoon_amount}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="italic">
                                    Chargeable Weight:{" "}
                                </div>
                                <div className="font-bold text-right">
                                    {data?.chargeable_weight}
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="border mt-4 w-full">
                        <thead>
                            <tr className="divide-x border-b italic">
                                <th className="p-2">Description</th>
                                <th className="p-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr className="divide-x">
                                <th className="p-2 text-left">MAWB Fee</th>
                                <th className="p-2 text-right">
                                    {data?.master_air_way_bill_fee}
                                </th>
                            </tr>
                            <tr className="divide-x">
                                <th className="p-2 text-left">Invoice Rate</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_rate}
                                </th>
                            </tr>

                            <tr className="divide-x">
                                <th className="p-2 text-left">Invoice AIT</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_ait}
                                </th>
                            </tr>
                            <tr className="divide-x">
                                <th className="p-2 text-left">Invoice CGC</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_cgc}
                                </th>
                            </tr>
                            <tr className="divide-x">
                                <th className="p-2 text-left">Invoice DTC</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_dtc}
                                </th>
                            </tr>
                            <tr className="divide-x">
                                <th className="p-2 text-left">Others</th>
                                <th className="p-2 text-right">
                                    {data?.others}
                                </th>
                            </tr>
                            <tr className="divide-x">
                                <th className="p-2 text-left">VAT</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_vat}
                                </th>
                            </tr>
                            <tr>
                                <th className="p-2 text-left">TOTAL (USD)</th>
                                <th className="p-2 text-right">
                                    = {data?.invoice_total_usd}
                                </th>
                            </tr>
                            <tr>
                                <th className="p-2 text-left">Exchange Rate</th>
                                <th className="p-2 text-right">
                                    = {data?.invoice_exchange_rate}
                                </th>
                            </tr>
                            <tr>
                                <th className="p-2 text-left">TOTAL (BDT)</th>
                                <th className="p-2 text-right">
                                    {data?.invoice_total_usd} x{" "}
                                    {data?.invoice_exchange_rate} ={" "}
                                    {data?.invoice_receivable_amount_bdt}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white p-8 rounded-md h-full mt-4">
                <h1 className="text-base font-medium mb-4 border-b font-semibold">
                    Transactions
                </h1>
                <div className="grid grid-cols-2 text-base font-normal">
                    <div>Due</div>
                    <div>Paid</div>
                </div>
                <div className="grid grid-cols-2 border-t border-r">
                    {data?.transactions.map((transaction: any) => {
                        return (
                            <div className="flex items-center gap-4 border-b border-l divide-x">
                                <div className="p-2">
                                    {transaction.transaction_date}
                                </div>
                                <div className="p-2">
                                    {transaction.amount.toLocaleString()}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default InvoiceEdit;
