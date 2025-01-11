import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExamplePage() {
 const example = {
    title: "The Impact of Nurse Staffing Levels on Patient Outcomes",
    field: "Nursing",
    content: `Introduction

    Nurse staffing levels have emerged as a critical topic within the nursing field, particularly due to their direct implications for patient safety, quality of care, and overall healthcare outcomes. Adequate staffing is essential for nurses to perform their duties effectively, maintain patient safety, and reduce the likelihood of adverse events. This literature review explores the relationship between nurse staffing levels and patient outcomes, including the implications for healthcare policy, patient safety, and nursing practice.
    
    Theoretical Underpinnings
    
    The foundation for the connection between nurse staffing and patient outcomes is grounded in several theories, most notably the Donabedian Model (Donabedian, 1988). This model emphasizes the relationship between structure (such as staffing levels), process (the care delivered), and outcomes (patient health status). According to this model, adequate staffing is a critical structural component that influences both the processes of care and the associated outcomes.
    
    Furthermore, the Job Demands-Resources (JD-R) model offers insights into how nurse staffing, as a job resource, can influence burnout and job satisfaction, ultimately impacting patient care (Demerouti et al., 2001). When staffing levels are insufficient, the demands placed on nurses increase, leading to stress, burnout, and decreased quality of care.
    
    Impacts of Staffing Levels on Patient Outcomes
    
    Patient Safety and Quality of Care
    Numerous studies have demonstrated a direct correlation between inadequate nurse staffing levels and negative patient outcomes. A landmark study by Needleman et al. (2002) found that higher nurse-to-patient ratios were associated with lower rates of adverse outcomes, including medication errors, infections, and patient mortality. The research concluded that increased nurse staffing could lead to better monitoring of patients, timely interventions, and overall improved quality of care.
    
    Subsequent studies have reinforced these findings. A systematic review conducted by Griffiths et al. (2018) found consistent evidence that low nurse staffing levels were linked to higher mortality rates, increased length of hospital stays, and higher rates of hospital-acquired infections. The evidence suggests that staffing levels are not merely a budgetary consideration but a fundamental element of patient safety.
    
    Nurse Well-Being and Job Satisfaction
    Inadequate staffing does not only affect patient outcomes; it also impacts nurses' well-being. Research indicates that high patient workloads can lead to increased burnout, job dissatisfaction, and a higher turnover rate among nursing staff (Stalpers et al., 2015). A study by McHugh and Ma (2013) showed that hospitals with lower nurse staffing levels faced higher rates of turnover and vacancy, creating a cycle that compounds the challenges of maintaining adequate staffing.
    
    Furthermore, the Nurses' Health Study conducted by The American Nurses Association (2015) revealed that nurses working in understaffed environments reported higher levels of emotional exhaustion and intention to leave their jobs. These challenges underscore the need for staffing models that prioritize nurse well-being to ensure a stable workforce that can deliver high-quality patient care.
    
    Regulatory and Policy Implications
    The implications of staffing levels extend beyond hospital walls; they inform healthcare policy and regulatory practices. Several states in the U.S. have instituted mandatory nurse staffing ratios in response to evidence linking staffing levels to patient outcomes. California, for instance, was the first state to implement such laws in 2004, leading to a reduction in patient mortality and improved nursing conditions (Aiken et al., 2010).
    
    The World Health Organization (WHO) has also emphasized the importance of adequate staffing in its guidelines for health worker policies. The WHO advocates for strategic workforce planning as a means to ensure that healthcare facilities can provide safe and effective care (WHO, 2006). Policymakers are increasingly recognizing the need for regulations that support optimal staffing to improve both patient and nursing outcomes.
    
    Challenges and Future Directions
    
    Despite the compelling evidence linking nurse staffing levels to patient outcomes, challenges remain in implementing effective staffing models. Financial constraints, fluctuating patient census rates, and staffing shortages are prevalent issues that healthcare organizations face. Research by McCoy et al. (2020) indicates that many hospitals often resort to temporary staffing solutions, which may not be in the best interest of patient care and continuity.
    
    Future research should focus on innovative staffing models that integrate technology, such as nurse scheduling software that optimizes nurse assignments based on patient needs and acuity levels. Additionally, more studies are needed to examine the long-term effects of staffing regulations on outcomes as well as the socioeconomic factors that influence nursing workforce stability.
    
    Conclusion
    
    The literature demonstrates a strong and consistent link between nurse staffing levels and patient outcomes, emphasizing the critical importance of adequate staffing in ensuring patient safety and the well-being of nursing staff. The relationship between staffing levels, patient care quality, and nurse satisfaction underscores the need for ongoing policy support and regulatory frameworks that prioritize optimal nurse-to-patient ratios. As the healthcare landscape continues to evolve, addressing staffing challenges will be essential in fostering a healthcare system that consistently delivers high-quality care.
    
    References
    
    Aiken, L. H., Sloane, D. M., & Griffiths, P. (2010). Priority Areas for Research on Health Care Workforce and Patient Outcomes. Health Affairs, 29(1), 52-58.
    Demerouti, E., Bakker, A. B., Nachreiner, F., & Schaufeli, W. B. (2001). The Job Demands-Resources Model of Burnout. Journal of Applied Psychology, 86(3), 499-512.
    Donabedian, A. (1988). The Quality of Care: How Can It Be Assessed? Journal of the American Medical Association, 260(12), 1743-1748.
    Griffiths, P., Maruotti, A.,-Carvalho, M., et al. (2018). Nursing Staff Policies and Patient Outcomes: A Systematic Review. International Nursing Review, 65(2), 221-230.
    McCoy, L., et al. (2020). Twenty-First Century Healthcare: Capitalizing on a Massive Evolution of Our Nursing Workforce. Nursing Outlook, 68(6), 775-785.
    McHugh, M. D., & Ma, C. (2013). The Relationship Between Nurse Staffing and Hospital Readmission Rates: A Systematic Review. *Nursing Economic$, 31(1), 23-30.
    Needleman, J., Buerhaus, P. I., & Stewart, M. (2002). Nurse Staffing and Patient Outcomes in Hospitals. New England Journal of Medicine, 346(22), 1715-1722.
    Stalpers, D., et al. (2015). The Relationship Between Nurse Workload and Patient Care Quality: A Systematic Review. Journal of Advanced Nursing, 71(8), 1857-1871.
    World Health Organization. (2006). The World Health Report 2006: Working together for health. World Health Organization.`
  }
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{example.title}</CardTitle>
            <div className="text-sm text-muted-foreground mt-2">
              Field: {example.field}
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {example.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>
      </div>
    </div>
  )
}