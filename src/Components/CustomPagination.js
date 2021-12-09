import React from 'react'
import Pagination from "@material-ui/lab/Pagination"
import { createTheme, ThemeProvider } from "@material-ui/core"


const darkTheme = createTheme({
    palette: {
        type: "dark"
    }
})
const CustomPagination = ({ numberOfPages = 10, setPage }) => {
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0, 0);
    }
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10
        }}>

            <ThemeProvider theme={darkTheme} >
                <Pagination
                    count={numberOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    size="large"
                    // color="primary"
                    variant="outlined"
                    hideNextButton
                    hidePrevButton />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
