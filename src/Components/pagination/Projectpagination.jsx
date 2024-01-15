
import React from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';

const CustomPagination = ({ page, totalPages, onPageChange }) => {
    const handlePageChange = (event, value) => {
        onPageChange(value);
    };

    return (
        <>
            <Box
                sx={{
                    margin: "auto",
                    width: "fit-content",
                    alignItems: "center",
                }}
            >
                <Pagination lg={{ justifyContent: 'center' }}
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    boundaryCount={2}
                    showFirstButton
                    showLastButton
                    renderItem={(item) => (
                        <PaginationItem
                            component="button"
                            {...item}
                        />
                    )}
                />

            </Box>
        </>
    );
};

export default CustomPagination;
