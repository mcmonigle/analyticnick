export default function references(props) {
    const { refs } = props;
    const styles = {
        parent: {display: 'flex'},
        index: {order: 0, flexGrow: 0, paddingRight: '8px'},
        citation: {order: 1, 
                    flexGrow: 1}
    }
    const referenceList = refs.map((ref, ind) => {
        return <div id={ref.href} style={styles.parent}><div style={styles.index}>[{ind+1}]</div> 
        <div style={styles.citation}>{ref.citation}</div> </div>
    })
    return <div style={{marginTop: '14px'}}>
            <h3>References</h3>
            <div style={{marginTop:'14px', marginBottom: '14px'}}>
            {referenceList}           
            </div>
            </div>
}