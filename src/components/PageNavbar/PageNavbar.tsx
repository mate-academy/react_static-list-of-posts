import React from 'react';
import '../../styles/components/PageNavbar.scss';
import {
  Button,
  Navbar,
  Container,
  Form,
  FormControl,
} from 'react-bootstrap';
import { PageDate } from '../../api/time';

type Props = {
  brandTitle: string;
  requestSample: string;
};

export const PageNavbar: React.FC<Props> = ({
  brandTitle, requestSample,
}) => {
  const today = new PageDate();

  return (
    <Navbar className="PageNavbar" bg="primary" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          href="#"
          className="PageNavbar__title d-flex align-items-center"
        >
          {`${brandTitle} | `}

          <span
            className="
            PageNavbar__date
            d-inline-flex
            flex-column
            ms-2
            "
          >
            {PageDate.getTodayMessage()}

            <span className="PageNavbar__date-weekday">
              {PageDate.getWeekDayOf(today)}
            </span>
          </span>
        </Navbar.Brand>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder={`Enter your ${requestSample}...`}
            className="me-2"
            aria-label="Search"
          />

          <Button className="PageNavbar__button me-2" variant="light">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
