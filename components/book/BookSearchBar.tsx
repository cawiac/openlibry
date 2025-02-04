import { Divider, IconButton, InputBase, Paper, Tooltip } from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import QueueIcon from "@mui/icons-material/Queue";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";

import Grid from "@mui/material/Grid";

interface BookSearchBarPropType {
  handleInputChange: any;
  handleNewBook: any;
  bookSearchInput: any;
  toggleView: any;
  detailView: boolean;
}

export default function BookSearchBar({
  handleInputChange,
  handleNewBook,
  bookSearchInput,
  toggleView,
  detailView,
}: BookSearchBarPropType) {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ px: 10, my: 5 }}
    >
      <Grid item>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <Tooltip title="Ansicht wechseln">
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              onClick={toggleView}
            >
              {detailView ? <GridViewIcon /> : <ViewListIcon />}
            </IconButton>
          </Tooltip>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={bookSearchInput}
            onChange={handleInputChange}
            placeholder="Buch suchen.."
            inputProps={{ "aria-label": "search books" }}
          />
          <Tooltip title="Suche">
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Tooltip title="Neues Buch erzeugen">
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="new-book"
              onClick={handleNewBook}
            >
              <QueueIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  );
}
