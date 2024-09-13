import { Table, Container } from "react-bootstrap";

export function Tables() {
  return (
    <Container>
      <div>
        <Table responsive="sm">
          <thead>
            <tr className="text-center">
              <th className="p-3 border-2 h5 fw-bolder">#</th>
              <th className="p-3 border-2 h5 fw-bolder">Full Name</th>
              <th className="p-3 border-2 h5 fw-bolder">Email Address</th>
              <th className="p-3 border-2 h5 fw-bolder">Mobile no.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-2">1</td>
              <td className="p-3 border-2">AAA</td>
              <td className="p-3 border-2">aaa@aaa.com</td>
              <td className="p-3 border-2">1234567890</td>
            </tr>
            <tr>
              <td className="p-3 border-2">2</td>
              <td className="p-3 border-2">BBB</td>
              <td className="p-3 border-2">bbb@bbb.com</td>
              <td className="p-3 border-2">9876543210</td>
            </tr>
            <tr>
              <td className="p-3 border-2">3</td>
              <td className="p-3 border-2">CCC</td>
              <td className="p-3 border-2">ccc@ccc.com</td>
              <td className="p-3 border-2">7410258963</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
