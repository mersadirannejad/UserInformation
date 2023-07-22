import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    Grid,
    Column,
    DataTable
} from "@carbon/react"

const headers = [
    {
        key: 'firstName',
        header: 'First name',
    },
    {
        key: 'lastName',
        header: 'Last name',
    },
    {
        key: 'birthdayDate',
        header: 'Date of birth',
    },
    {
        key: 'age',
        header: 'Age',
    },
    {
        key: 'gender',
        header: 'Gender',
    },
];

const MyDataTable = ({ data }) => {

    return (
        <>
            <Grid condensed style={{ marginTop: '1rem' }}>
                <Column lg={16}>
                    <DataTable rows={data} headers={headers}>
                        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                            <Table {...getTableProps()}>
                                <TableHead>
                                    <TableRow>
                                        {headers.map((header) => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id} {...getRowProps({ row })}>
                                            {row.cells.map((cell) => (
                                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </DataTable>
                </Column>
            </Grid>
        </>
    )
}

export default MyDataTable 