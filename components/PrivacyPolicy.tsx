import React from 'react';
import { Shield, Database, Lock, Share2, UserCheck, Cookie, RefreshCw, AlertCircle } from 'lucide-react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon, title, children }) => (
  <section className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center text-violet-400">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    <div className="pl-13 text-slate-300 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = '2026年2月17日';

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-6">
            <Shield size={16} />
            <span>隐私保护承诺</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            隐私协议
          </h1>
          <p className="text-slate-400">
            最后更新日期：{lastUpdated}
          </p>
        </header>

        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 md:p-10 mb-10">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <AlertCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-slate-300 text-sm leading-relaxed">
              欢迎访问 AcgLine.Org。我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。
            </p>
          </div>

          <Section icon={<Database size={20} />} title="一、用户数据收集范围与目的">
            <p>
              为了向您提供服务、改进我们的服务体验以及保障服务安全，我们可能会收集以下类型的信息：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">设备信息：</strong>包括设备型号、操作系统版本、唯一设备标识符、浏览器类型等，用于优化网站兼容性和性能。</li>
              <li><strong className="text-white">日志信息：</strong>包括访问时间、访问页面、停留时长、来源页面等，用于分析用户行为和改进服务。</li>
              <li><strong className="text-white">IP地址：</strong>用于安全防护、防止恶意攻击和遵守法律法规要求。</li>
              <li><strong className="text-white">Cookie信息：</strong>用于记住您的偏好设置和提供个性化体验。</li>
            </ul>
            <p className="mt-4">
              我们收集这些信息的目的是：提供、维护、改进我们的服务；保障服务安全；遵守法律法规要求；经您同意的其他用途。
            </p>
          </Section>

          <Section icon={<Lock size={20} />} title="二、数据存储与保护措施">
            <p>
              我们采取多层次的安全措施来保护您的个人信息：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">数据加密：</strong>使用HTTPS加密传输，确保数据在传输过程中的安全性。</li>
              <li><strong className="text-white">访问控制：</strong>严格限制对个人信息的访问权限，仅授权人员可访问。</li>
              <li><strong className="text-white">安全审计：</strong>定期进行安全评估和漏洞扫描，及时修复安全隐患。</li>
              <li><strong className="text-white">数据备份：</strong>建立完善的数据备份机制，防止数据丢失。</li>
            </ul>
            <p className="mt-4">
              我们会将您的个人信息存储在中华人民共和国境内。如需跨境传输，我们会单独征得您的授权同意，并确保符合相关法律法规要求。
            </p>
          </Section>

          <Section icon={<Share2 size={20} />} title="三、数据使用与共享政策">
            <p>
              我们承诺不会向第三方出售您的个人信息。在以下情况下，我们可能会共享您的信息：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">经您同意：</strong>获得您明确同意后，我们会与第三方共享您的信息。</li>
              <li><strong className="text-white">服务提供商：</strong>我们可能会委托第三方服务商协助提供服务，但会要求其严格遵守保密义务。</li>
              <li><strong className="text-white">法律要求：</strong>根据法律法规要求、法律程序、诉讼或政府主管部门的强制性要求。</li>
            </ul>
            <p className="mt-4">
              我们会与第三方签署严格的保密协议，要求其按照我们的要求、本隐私协议以及任何相关的保密和安全措施来处理个人信息。
            </p>
          </Section>

          <Section icon={<UserCheck size={20} />} title="四、用户权利与控制选项">
            <p>
              您对您的个人信息享有以下权利：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">访问权：</strong>您有权访问我们持有的您的个人信息。</li>
              <li><strong className="text-white">更正权：</strong>您有权要求更正不准确或不完整的个人信息。</li>
              <li><strong className="text-white">删除权：</strong>在特定情况下，您有权要求删除您的个人信息。</li>
              <li><strong className="text-white">撤回同意权：</strong>您有权随时撤回之前给予的同意。</li>
              <li><strong className="text-white">注销账户：</strong>您可以通过联系我们注销您的账户。</li>
            </ul>
            <p className="mt-4">
              如需行使上述权利，请通过本网站提供的联系方式与我们取得联系。我们将在15个工作日内予以答复。
            </p>
          </Section>

          <Section icon={<Cookie size={20} />} title="五、Cookie及类似技术的使用说明">
            <p>
              我们使用Cookie和类似技术来：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-white">必要性Cookie：</strong>确保网站正常运行所必需的Cookie，无法禁用。</li>
              <li><strong className="text-white">功能性Cookie：</strong>记住您的偏好设置，如语言选择、主题设置等。</li>
              <li><strong className="text-white">分析性Cookie：</strong>了解用户如何使用我们的网站，帮助我们改进服务。</li>
            </ul>
            <p className="mt-4">
              您可以通过浏览器设置管理或删除Cookie。请注意，禁用某些Cookie可能会影响网站的功能和您的使用体验。
            </p>
          </Section>

          <Section icon={<RefreshCw size={20} />} title="六、隐私政策更新机制及通知方式">
            <p>
              我们可能会不时更新本隐私协议。更新时，我们将在本页面发布修订后的协议，并更新"最后更新日期"。
            </p>
            <p className="mt-3">
              对于重大变更，我们还会通过以下方式通知您：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>在网站显著位置发布通知</li>
              <li>通过弹窗或其他显著方式提醒</li>
              <li>其他符合法律法规要求的告知方式</li>
            </ul>
            <p className="mt-4">
              我们鼓励您定期查阅本隐私协议，以了解我们如何保护您的信息。如果您在隐私协议更新后继续使用我们的服务，即表示您同意接受修订后的协议。
            </p>
          </Section>

          <section className="mt-10 pt-8 border-t border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">七、联系我们</h2>
            <p className="text-slate-300 leading-relaxed">
              如果您对本隐私协议有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <p className="text-slate-300">
                <strong className="text-white">联系邮箱：</strong>privacy@acgline.org
              </p>
              <p className="text-slate-300 mt-2">
                <strong className="text-white">响应时间：</strong>我们将在收到您的请求后15个工作日内予以答复。
              </p>
            </div>
          </section>
        </div>

        <footer className="text-center text-slate-500 text-sm">
          <p>© 2026 AcgLine.Org 保留所有权利</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
