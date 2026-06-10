\# Fowler Refactoring Notes



\## Besonders interessant



\### Extract Function (Extract Method)



Dieses Refactoring ermöglicht es, Teile eines langen oder komplexen Programmcodes in eine eigene Funktion auszulagern. Dadurch wird der Code besser lesbar, leichter testbar und einfacher wartbar.



Warum interessant:



\* Verbesserte Lesbarkeit

\* Wiederverwendbarer Code

\* Kleinere und übersichtlichere Funktionen



\### Extract Class



Bei diesem Refactoring werden zusammengehörige Eigenschaften und Methoden aus einer großen Klasse in eine neue Klasse ausgelagert.



Warum interessant:



\* Bessere Strukturierung

\* Geringere Komplexität

\* Einhaltung des Single Responsibility Principle



\## Schwer verständlich



\### Replace Conditional with Polymorphism



Dieses Refactoring ersetzt große if- oder switch-Konstruktionen durch Vererbung und Polymorphismus.



Warum schwer verständlich:



\* Für kleine Programme oft unnötig komplex

\* Erfordert Kenntnisse objektorientierter Konzepte

\* Der Nutzen wird meist erst bei größeren Projekten deutlich



\## Persönliche Einschätzung



Extract Function und Extract Class erscheinen im praktischen Alltag besonders nützlich, da sie direkt zur Verbesserung der Codequalität beitragen. Replace Conditional with Polymorphism wirkt dagegen für kleinere Anwendungen zunächst vergleichsweise aufwendig und schwer nachvollziehbar.



