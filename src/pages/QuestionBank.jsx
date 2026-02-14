import React from 'react';
import PageHero from '../components/PageHero';
import { cyberSecurityQuestionBank, questionBankSummary } from '../data/questionBank';

const QuestionBank = () => {
  return (
    <div>
      <PageHero
        badge="BANK SOAL"
        title="300 Soal Cyber Security"
        subtitle="Bank soal kurikulum cyber security dengan 20 chapter (masing-masing 15 soal)."
      />

      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Chapter</p>
              <p className="text-3xl font-bold text-cyan-300">{questionBankSummary.chapterCount}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Total Soal</p>
              <p className="text-3xl font-bold text-cyan-300">{questionBankSummary.totalQuestions}</p>
            </div>
          </div>

          <div className="space-y-4">
            {cyberSecurityQuestionBank.map((chapter) => (
              <details key={chapter.id} className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <summary className="cursor-pointer text-white font-semibold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span>Chapter {chapter.id}: {chapter.title}</span>
                  <span className="text-cyan-300 text-sm">{chapter.questionCount} soal</span>
                </summary>
                <p className="text-gray-400 text-sm mt-3">Skenario latihan: {chapter.scenario}</p>

                <div className="mt-4 space-y-4">
                  {chapter.questions.map((question, index) => (
                    <div key={question.id} className="border border-dark-700 rounded-lg p-4">
                      <p className="text-gray-200 text-sm font-medium">{index + 1}. {question.prompt}</p>
                      <ol className="mt-3 space-y-1 text-sm text-gray-400 list-[upper-alpha] ml-5">
                        {question.options.map((option) => (
                          <li key={option}>{option}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionBank;
