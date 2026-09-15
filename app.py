from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>صفحتي الشخصية</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f3f4f6;
            margin: 0;
            padding: 30px;
            color: #1f2937;
            line-height: 1.8;
        }

        .page {
            max-width: 1000px;
            margin: auto;
        }

        .card,
        .experience-section {
            background: #ffffff;
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
            margin-bottom: 25px;
        }

        .profile-img {
            width: 180px;
            height: 180px;
            object-fit: cover;
            object-position: center 10%;
            border-radius: 16px;
            display: block;
            margin: 0 auto 20px;
            border: 4px solid #1f2937;
        }

        h1 {
            text-align: center;
            color: #111827;
            margin-bottom: 10px;
        }

        h2 {
            color: #1d4ed8;
            border-bottom: 2px solid #dbeafe;
            padding-bottom: 6px;
            margin-top: 25px;
        }

        h3 {
            color: #111827;
            margin-bottom: 8px;
        }

        p {
            font-size: 17px;
            margin: 8px 0;
        }

        ul {
            padding-right: 25px;
        }

        li {
            font-size: 17px;
            margin-bottom: 6px;
        }

        .experience-card,
        .project-card {
            background: #f9fafb;
            padding: 18px;
            border-radius: 12px;
            border-right: 5px solid #2563eb;
            margin-top: 18px;
        }

        .company {
            font-weight: bold;
            color: #374151;
        }

        .date,
        .location {
            color: #6b7280;
        }

        .description {
            color: #374151;
        }

        .skills {
            background: #eff6ff;
            padding: 10px;
            border-radius: 8px;
            color: #1e3a8a;
        }

        .projects-section {
            margin-top: 15px;
        }

        .links a {
            color: #2563eb;
            text-decoration: none;
            font-weight: bold;
        }

        .links a:hover {
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            body {
                padding: 15px;
            }

            .card,
            .experience-section {
                padding: 18px;
            }

            .profile-img {
                width: 140px;
                height: 140px;
            }
        }
    </style>
</head>

<body>

    <div class="page">

        <div class="card">
            <img src="/static/profile.jpg.jpeg" class="profile-img" alt="صورتي الشخصية">

            <h1>راكان خالد الفهيد</h1>

            <h2>نبذة عني</h2>
            <p>
                أنا مهتم بمجال التقنية والأمن السيبراني، وأتعلم البرمجة بلغة Python.
            </p>

            <h2>تعليمي</h2>
            <p>
                حاصل على درجة البكالوريوس من التدريب المهني والتقني بتخصص الأمن السيبراني.
            </p>

            <h2>معلوماتي</h2>
            <p><strong>الاسم:</strong> راكان خالد الفهيد</p>
            <p><strong>التخصص:</strong> الأمن السيبراني</p>
            <p><strong>البريد:</strong> Rakanalfeheed@gmail.com</p>
            <p><strong>المدينة:</strong> الرياض</p>

            <h2>مهاراتي</h2>
            <ul>
                <li>Python</li>
                <li>Excel</li>
                <li>Networking</li>
                <li>Cyber Security</li>
            </ul>

            <h2>تواصل معي</h2>
            <div class="links">
                <p>
                    <strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/rakan-alfehaid-9617a1330" target="_blank">
                        linkedin.com/in/rakan-alfehaid-9617a1330
                    </a>
                </p>

                <p>
                    <strong>GitHub:</strong>
                    <a href="https://www.github.com/rakanalfeheed-svg" target="_blank">
                        github.com/rakanalfeheed-svg
                    </a>
                </p>
            </div>
        </div>

        <div class="experience-section">
            <h2>خبراتي</h2>

            <div class="experience-card">
                <h3>أخصائي دعم فني</h3>

                <p class="company">
                    ثبات للتطوير العقاري | Thabat Real Estate Development
                </p>

                <p class="date">
                    يوليو 2025 - يوليو 2026 · سنة واحدة وشهر واحد
                </p>

                <p class="location">
                    السعودية · دوام من مقر الشركة
                </p>

                <p class="description">
                    المساهمة في إنجاز المهام اليومية، وتنظيم العمل، والالتزام بالمواعيد،
                    والتعاون مع فريق العمل لتحقيق أهداف الشركة.
                </p>

                <p class="skills">
                    <strong>المهارات:</strong>
                    Adobe Acrobat، Active Directory Users and Computers
                </p>
            </div>

            <div class="experience-card">
                <h3>مهندس نظم</h3>

                <p class="company">
                    Triple Check Group (TCG) Training
                </p>

                <p class="date">
                    يناير 2024 - يناير 2025 · سنة واحدة وشهر واحد
                </p>

                <p class="location">
                    السعودية · عمل عن بُعد
                </p>

                <p class="description">
                    العمل على دعم الأنظمة ومتابعة المهام التقنية والمساهمة في تحسين بيئة العمل التقنية.
                </p>

                <h3>Projects I worked on</h3>

                <div class="projects-section">

                    <div class="project-card">
                        <h3>Next-Generation Firewall (NGFW) Managed Service System Engineer</h3>

                        <p>
                            <strong>Documentation & Governance:</strong>
                            Authored, structured, and standardized operational documentation, including process guidelines, security policies, and administrative forms for NGFW management.
                        </p>

                        <p>
                            <strong>Change Management:</strong>
                            Managed and processed firewall change requests, ensuring all modifications adhered to established security protocols and minimized service disruption.
                        </p>

                        <p>
                            <strong>Monitoring & Administration:</strong>
                            Monitored network traffic and managed firewall health to proactively identify and mitigate potential security anomalies.
                        </p>
                    </div>

                    <div class="project-card">
                        <h3>Endpoint Protection Solution Project Joiner Engineer</h3>

                        <p>
                            <strong>Environment Provisioning:</strong>
                            Facilitated and structured testing and staging environments to ensure seamless software evaluation and deployment.
                        </p>

                        <p>
                            <strong>EPP Deployment:</strong>
                            Collaborated on the initial deployment and orchestration of SentinelOne Endpoint Protection Platform (EPP) across enterprise nodes.
                        </p>

                        <p>
                            <strong>Configuration & Tuning:</strong>
                            Administered configurations, customized endpoint groups, established alert notification thresholds, and optimized security policy settings.
                        </p>
                    </div>

                    <div class="project-card">
                        <h3>Compliance and Gap Assessment Projects — Joiner Specialist</h3>

                        <p>
                            <strong>Regulatory Alignment:</strong>
                            Authored compliance documentation and procedural evidence to align organizational operations with NCA, SAMA, and ISO 27001 frameworks.
                        </p>

                        <p>
                            <strong>Gap Analysis:</strong>
                            Maintained, tracked, and updated complex gap assessment registries to identify and remediate compliance variances.
                        </p>

                        <p>
                            <strong>Risk Management:</strong>
                            Collaborated on the administration and continuous maintenance of the corporate risk register, ensuring emerging risks were documented and mitigated.
                        </p>
                    </div>

                </div>
            </div>

            <div class="experience-card">
                <h3>مكتب مساعدة تكنولوجيا المعلومات</h3>

                <p class="company">
                    Critical Facilities Engineering Consultancy
                </p>

                <p class="date">
                    يناير 2017 - يناير 2023 · ست سنوات · دوام كامل
                </p>

                

                <p class="description">
                    تقديم الدعم الفني للمستخدمين، مساعدة المستخدمين في حل المشكلات التقنية اليومية،
                    تشخيص مشاكل الأجهزة والبرامج، متابعة طلبات الدعم الفني حتى يتم حلها،
                    والتعاون مع فريق تقنية المعلومات لضمان استمرارية العمل.
                </p>
            </div>

        </div>

    </div>

</body>
</html>
"""

if __name__ == "__main__":
    app.run(debug=True)