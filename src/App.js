import styles from "./styles.module.scss";

function App() {
  const renderI18nTextAsHtml = (key) => (
    <span dangerouslySetInnerHTML={{ __html: key }} />
  );

  const renderHowToFormatCsv = () => (
    <>
      <h3>How to format your .csv file</h3>
      <ul className={styles.bulletList}>
        <li>
          <div>{renderI18nTextAsHtml("<b>Market:</b> Market Code")}</div>
        </li>
        <li>
          <div>{renderI18nTextAsHtml("<b>Rx ID:</b> Restaurant ID")}</div>
        </li>
        <li>
          <div>{renderI18nTextAsHtml("<b>Rx name:</b> Restaurant Name")}</div>
        </li>
        <li>
          <div>
            {renderI18nTextAsHtml(
              "<b>Reason for exclusion:</b> The reason for excluding the restaurant from eligibility"
            )}
          </div>
        </li>
      </ul>
    </>
  );

  const renderCsvExample = () => (
    <div className={styles.csvExample}>
      <table className={styles.csvExampleTable}>
        <thead>
          <tr>
            {["", "Market", "Rx ID", "Rx name", "Reason for exclusion"].map(
              (column) => (
                <th key={column}>
                  <span bold>{column}</span>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {[
            ["UKI", "123", "Ranoush - High Street Kensington", "Contractual"],
            ["", "", "", ""],
          ].map(([market, rxId, rxName, reason], index) => (
            <tr key={rxId}>
              <td>
                <div bold>{index + 1}</div>
              </td>
              <td>
                <div>{market}</div>
              </td>
              <td>
                <div>{rxId}</div>
              </td>
              <td>
                <div>{rxName}</div>
              </td>
              <td>
                <div>{reason}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.csvExampleFadeOut} />
    </div>
  );

  const renderCsvInfoBanner = () => {
    return (
      <div className={styles.infoBanner}>
        <div>
          ⚠️ Make sure your file is no larger than 5MB, is in .csv format and is
          only using columns: Market, Rx ID, Rx Name and Reason for exclusion.
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderHowToFormatCsv()}
      {renderCsvExample()}
      {renderCsvInfoBanner()}
    </div>
  );
}

export default App;
