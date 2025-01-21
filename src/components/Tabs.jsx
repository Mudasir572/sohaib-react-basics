export default function Tabs({children,tabButtons,container="menu"}){
    const ContentContainer = container;
    return (
        <>
        <ContentContainer>
         {tabButtons}
        </ContentContainer>
        {children}
        </>
    )

}