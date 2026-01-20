// PrivacyPolicy.jsx
import React from 'react';
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "January 20, 2024";
  
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: `
        <strong>Personal Information:</strong>
        <ul>
          <li>Name and contact details (email, phone number)</li>
          <li>Account credentials</li>
          <li>Device information (model, operating system)</li>
          <li>Network operator details</li>
        </ul>
        
        <strong>Transaction Information:</strong>
        <ul>
          <li>Airtime purchase history</li>
          <li>Data bundle purchases</li>
          <li>Bill payment records</li>
          <li>Transaction timestamps and amounts</li>
        </ul>
        
        <strong>Technical Information:</strong>
        <ul>
          <li>IP address and location data</li>
          <li>App usage statistics</li>
          <li>Device permissions granted</li>
          <li>Crash reports and error logs</li>
        </ul>
      `
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: `
        We use collected information to:
        <ul>
          <li>Process your VTU transactions (airtime, data, bill payments)</li>
          <li>Provide customer support and troubleshoot issues</li>
          <li>Improve app performance and user experience</li>
          <li>Send important notifications about service updates</li>
          <li>Detect and prevent fraudulent activities</li>
          <li>Comply with legal obligations</li>
        </ul>
      `
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `
        We implement industry-standard security measures:
        <ul>
          <li>End-to-end encryption for all transactions</li>
          <li>Secure socket layer (SSL) technology</li>
          <li>Regular security audits and testing</li>
          <li>Access controls and authentication</li>
          <li>Data anonymization where possible</li>
          <li>Secure server infrastructure</li>
        </ul>
      `
    },
    {
      icon: Eye,
      title: "Third-Party Services",
      content: `
        We may share limited information with:
        <ul>
          <li>Telecommunication providers (for airtime/data top-ups)</li>
          <li>Bill payment service providers</li>
          <li>Cloud hosting services</li>
          <li>Analytics providers (Google Analytics)</li>
          <li>Customer support platforms</li>
        </ul>
        <p><strong>Note:</strong> We never sell your personal data to third parties.</p>
      `
    },
    {
      icon: AlertCircle,
      title: "Children's Privacy",
      content: `
        Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
      `
    },
    {
      icon: CheckCircle,
      title: "Your Rights",
      content: `
        You have the right to:
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Export your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent for data processing</li>
        </ul>
        <p>To exercise these rights, contact us at: <strong>privacy@payverve.com</strong></p>
      `
    }
  ];

  const keyPoints = [
    "No financial transaction processing (only VTU services)",
    "No sharing of personal data with advertisers",
    "Data retention limited to necessary period",
    "Transparent data processing practices",
    "GDPR and Google Play Store compliant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: {lastUpdated}
          </p>
          <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <p className="text-cyan-400 font-semibold">
              PayVerve VTU App - Bill Payment & Top-up Services
            </p>
            <p className="text-gray-300 text-sm mt-2">
              This privacy policy applies to our VTU services including airtime top-up, data bundles, 
              bill payments, and TV subscriptions. We do not process financial transactions or handle 
              money transfers.
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="mb-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            Key Privacy Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                  <div 
                    className="text-gray-300 space-y-3"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Additional Info */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/30">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-cyan-400 mb-2">Privacy Questions</h3>
              <p className="text-gray-300">privacy@payverve.com</p>
              <p className="text-gray-400 text-sm mt-1">Response within 48 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-400 mb-2">Data Protection Officer</h3>
              <p className="text-gray-300">dpo@payverve.com</p>
              <p className="text-gray-400 text-sm mt-1">For data protection requests</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="font-semibold text-cyan-400 mb-3">Changes to Privacy Policy</h3>
            <p className="text-gray-300">
              We may update this privacy policy periodically. We will notify users of any 
              material changes through app notifications or email. Continued use of the 
              app after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>PayVerve VTU Services | Non-Financial Transaction Platform</p>
          <p className="mt-2">This policy is designed to comply with Google Play Store requirements for VTU applications.</p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}